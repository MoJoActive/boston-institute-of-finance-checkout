// --------------------------------------------------------
// Automated Deployment Script for Custom Checkout
// --------------------------------------------------------

/**
  If you're copying this file to a new checkout, complete the following
  1. Copy this file to /scripts/deploy.js 
  2. Install these dev-dependencies: `npm i chalk execa listr webdav-fs --save-dev`
  3. Add two new scripts to package.json
     "push:sandbox": "node scripts/deploy sandbox",
     "push:prod": "node scripts/deploy production"
  4. Add two new files to the root
     env.sandbox.json
     env.production.json

     Both files should contain the following, replacing the default slugs with the 
     storefront WebDAV credentials for sandbox and production (if applicable)
      {
        "WEBDAV_STOREHASH": "",
        "WEBDAV_USERNAME": "",
        "WEBDAV_PASSWORD": ""
      }
**/

/**
  How to use
  1. Run `npm run push:sandbox` - this will build and deploy the checkout to the sandbox storefront
  1. Run `npm run push:prod` - this will build and deploy the checkout to the production storefront
**/

console.clear();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const Listr = require('listr');
const execa = require('execa');
const WebDAV = require('webdav-fs');
const fetch = require('node-fetch');
const { glob } = require('glob');

const env = process.argv[2];
let config = {};
let timestamp;

console.log(chalk.blueBright('---------------------------------------'));
console.log(chalk.blueBright('Automated Custom Checkout Deployment'));
console.log('Builds and deploys custom checkout to a versioned folder on WebDAV.');
console.log(chalk.blueBright('---------------------------------------'));
console.log();

if (!env)
  return console.log(
    chalk.red('Please pass an environment (sandbox, prod) or use the npm run commands'),
  );

try {
  config = require(`../env.${env}.json`);
  if (!config.WEBDAV_STOREHASH || !config.WEBDAV_USERNAME || !config.WEBDAV_PASSWORD) {
    return console.log(
      chalk.red(
        `The env.${env}.json file is missing WebDAV credentials.\nPlease add the credentials to the file and try again.`,
      ),
    );
  }
} catch (ex) {
  console.log(chalk.red(`Missing env.${env}.json file.`));
  console.log(
    'A sample file was created for you, please fill out the storefront WebDAV credentials and try again.',
  );
  let sampleFile = { WEBDAV_STOREHASH: '', WEBDAV_USERNAME: '', WEBDAV_PASSWORD: '' };
  fs.writeFileSync(
    path.join(__dirname, `../env.${env}.json`),
    JSON.stringify(sampleFile, null, 2),
    { encoding: 'utf8' },
  );

  return;
}

const WebDAVHelper = {
  Connect: () => {
    return new WebDAV(`https://store-${config.WEBDAV_STOREHASH}.mybigcommerce.com/dav`, {
      username: config.WEBDAV_USERNAME,
      password: config.WEBDAV_PASSWORD,
      digest: true,
    });
  },
  MakeDir: (path) => {
    return new Promise(function (resolve, reject) {
      const wfs = WebDAVHelper.Connect();
      wfs.mkdir(`${path}`, function (err) {
        if (err) return reject(err);
        resolve(true);
      });
    });
  },
  UploadFiles: (src, dest, files) => {
    return new Promise(async function (resolve, reject) {
      const wfs = await WebDAVHelper.Connect();
      const uploader = (file) => {
        return new Promise((resolve, reject) => {
          const contents = fs.readFileSync(`${src}\\${file}`);
          wfs.writeFile(`${dest}/${file}`, contents, (err) => {
            if (err) reject(err);
            resolve();
          });
        });
      };
      let promises = files.filter((o) => o.includes('.')).map(uploader);
      Promise.all(promises).finally(resolve).catch(reject);
    });
  },
};

const NodeHelper = {
  ListFiles: (_path) => {
    return new Promise((resolve, reject) => {
      fs.readdir(_path, function (err, files) {
        if (err) return reject(err);
        resolve(files);
      });
    });
  },
};

const tasks = new Listr([
  {
    title: 'Build Checkout',
    task: (ctx, task) => {
      task.output = 'Building...';
      return execa('npm', ['run', 'build']).catch((reason) => {
        task.title = `Build failed`;
        throw new Error(reason.message);
      });
    },
  },
  {
    title: 'Pre-Deploy Setup',
    task: async (ctx, task) => {
      return new Promise(async (resolve, reject) => {
        try {
          // ----------------------------------
          // Create a new deployment slot on WebDAV
          // ----------------------------------
          task.output = 'Creating a new versioned folder and...';
          ctx.timestamp = timestamp = new Date()
            .toISOString()
            .replace(/\:/g, '_')
            .replace('T', '')
            .replace(/\..+/, '');
          ctx.destFolder = `/content/checkout/${ctx.timestamp}`;
          try {
            await WebDAVHelper.MakeDir(`/content/checkout`);
          } catch (ex) {}
          await WebDAVHelper.MakeDir(ctx.destFolder);
          await WebDAVHelper.MakeDir(`${ctx.destFolder}/static`);

          // ----------------------------------
          // Get a list of files/folders to upload
          // ----------------------------------
          task.output = 'Getting a list of files and folder to upload...';
          ctx.distFolder = path.join(__dirname, '../dist');
          ctx.distStaticFolder = path.join(__dirname, '../dist/static');
          ctx.distFiles = await NodeHelper.ListFiles(ctx.distFolder);
          ctx.distStaticFiles = await NodeHelper.ListFiles(ctx.distStaticFolder);
          ctx.fileCount = []
            .concat(ctx.distFiles, ctx.distStaticFiles)
            .filter((o) => o.includes('.')).length;
          resolve();
        } catch (ex) {
          task.title = `Pre-Deploy Setup Failed`;
          reject(ex);
          throw new Error(ex.message);
        }
      });
    },
  },
  {
    title: 'Deploy Checkout',
    task: async (ctx, task) => {
      return new Promise(async (resolve, reject) => {
        try {
          // ----------------------------------
          // Upload all the files to WebDAV
          // ----------------------------------
          task.output = `Uploading ${ctx.fileCount} files...`;
          await WebDAVHelper.UploadFiles(ctx.distFolder, ctx.destFolder, ctx.distFiles);
          await WebDAVHelper.UploadFiles(
            ctx.distStaticFolder,
            `${ctx.destFolder}/static`,
            ctx.distStaticFiles,
          );
          resolve();
        } catch (ex) {
          task.title = `Deployment failed`;
          reject(ex);
          throw new Error(ex.message);
        }
      });
    },
  },
  {
    title: 'Update Checkout Settings',
    task: async (ctx, task) =>
      new Promise(async (resolve, reject) => {
        try {
          // ----------------------------------
          // Upload all the files to WebDAV
          // ----------------------------------
          task.output = 'Updating settings...';

          const autoLoaderFile = glob.sync('auto-loader-*.js', {
            cwd: path.join(__dirname, '../dist'),
          })[0];

          console.log(`webdav:checkout/${timestamp}/${autoLoaderFile}`);

          // const res = await fetch(
          //   `https://api.bigcommerce.com/stores/${config.WEBDAV_STOREHASH}/v3/checkouts/settings`,
          //   {
          //     method: 'PUT',
          //     headers: {
          //       'X-Auth-Token': config.API_TOKEN,
          //       'Content-Type': 'application/json',
          //     },
          //     body: JSON.stringify({
          //       custom_checkout_script_url: `webdav:checkout/${timestamp}/${autoLoaderFile}`,
          //       order_confirmation_use_custom_checkout_script: true,
          //       custom_order_confirmation_script_url: `webdav:checkout/${timestamp}/${autoLoaderFile}`,
          //     }),
          //   },
          // );
          // const json = await res.json();

          // if (res.status != 200) {
          //   throw new Error(
          //     `Failed to update checkout settings. Status: ${res.status} | ${JSON.stringify(json)}`,
          //   );
          // }

          resolve();
        } catch (ex) {
          task.title = 'Deployment failed';
          reject(ex);
          throw new Error(ex.message);
        }
      }),
  },
]);

const finished = () => {
  // const { version } = require("../package.json");
  // console.log(`  ${chalk.green("√")} Finished`);
  // console.log();
  // console.log(chalk.magentaBright("---------------------------------------"));
  // console.log(chalk.magentaBright("Manual Step Required"));
  // console.log(chalk.magentaBright("---------------------------------------"));
  // console.log("A final step is required to change the storefront checkout to the newly deployed checkout.");
  // console.log();
  // console.log(`1. Go to ${chalk.blue(`https://store-${config.WEBDAV_STOREHASH}.mybigcommerce.com/manage/settings/checkout`)}`);
  // console.log(`2. Under "Custom Checkout Settings", replace "Script URL" with the following:`);
  // console.log(`   ${chalk.green(`webdav:checkout/${timestamp}/loader.js`)}`);
  // console.log(`3. Click Save`);
  // console.log();
  console.log('\n🎉 Thanks for deploying!');
};

tasks.run().then(finished);
