/* eslint-disable no-bitwise */
import {
  CheckoutSelectors,
  CustomerAccountRequestBody,
  CustomerCredentials,
  FormField,
} from '@bigcommerce/checkout-sdk';
import { FormikProps, withFormik } from 'formik';
import React, { FunctionComponent } from 'react';

import { withLanguage, WithLanguageProps } from '@bigcommerce/checkout/locale';

import { Button, ButtonVariant } from '../ui/button';
import { DynamicFormField, Fieldset, Form } from '../ui/form';

import './CreateAccountForm.scss';
import getCreateCustomerValidationSchema, {
  CreateAccountFormValues,
} from './getCreateCustomerValidationSchema';
import getPasswordRequirements from './getPasswordRequirements';
import mapCreateAccountFromFormValues from './mapCreateAccountFromFormValues';

export interface CreateAccountFormProps {
  formFields: FormField[];
  createAccountError?: Error;
  isCreatingAccount?: boolean;
  requiresMarketingConsent: boolean;
  isFloatingLabelEnabled?: boolean;
  onCancel?(): void;
  onSubmit(values: CreateAccountFormValues): void;
  createAccount: (values: CustomerAccountRequestBody) => Promise<CheckoutSelectors>;
  signIn: (credentials: CustomerCredentials) => Promise<CheckoutSelectors>;
}

const CreateAccountForm: FunctionComponent<
  CreateAccountFormProps & WithLanguageProps & FormikProps<CreateAccountFormValues>
> = ({ formFields, isCreatingAccount, isFloatingLabelEnabled }) => {
  return (
    <Form
      className="checkout-form"
      id="checkout-customer-returning"
      testId="checkout-customer-returning"
    >
      <Fieldset>
        <div className="create-account-form">
          {formFields
            .filter((field) => field.name !== 'password')
            .filter((field) => field.name !== 'field_26')
            .map((field) => {
              if (field.name === 'firstName') {
                return { ...field, label: 'Student First Name' };
              }

              if (field.name === 'lastName') {
                return { ...field, label: 'Student Last Name' };
              }

              if (field.name === 'email') {
                return { ...field, label: 'Student Email' };
              }

              if (field.label === 'Phone') {
                return { ...field, label: 'Student Phone' };
              }

              if (field.label === 'Company') {
                return { ...field, label: 'Student Company' };
              }

              return field;
            })
            .map((field) => (
              <DynamicFormField
                autocomplete={field.name}
                extraClass={`dynamic-form-field--${field.name}`}
                field={field}
                isFloatingLabelEnabled={isFloatingLabelEnabled}
                key={field.id}
                label={field.label}
                parentFieldName={field.custom ? 'customFields' : undefined}
              />
            ))}
        </div>
      </Fieldset>

      <div className="form-actions">
        <Button
          disabled={isCreatingAccount}
          id="checkout-customer-create"
          testId="customer-continue-create"
          type="submit"
          variant={ButtonVariant.Primary}
        >
          Continue
        </Button>
      </div>
    </Form>
  );
};

export default withLanguage(
  withFormik<CreateAccountFormProps & WithLanguageProps, CreateAccountFormValues>({
    handleSubmit: async (values, { props: { onSubmit, createAccount, signIn } }) => {
      const CustomerPassword = {
        val1: `${(window as any).checkoutCustom?.storeProfile?.storeHash}_||_${
          (window as any).checkoutCustom?.storeProfile?.storeId
        }`,
        val2: '47f833ecf3135c5ba623a04787b5000f2952edcf72215af29c9a41b0a31dd385',
        Encode: (email: string) => {
          let encoded = '';

          for (let i = 0; i < email.length; i++) {
            const charCode =
              email.charCodeAt(i) ^
              CustomerPassword.val2.charCodeAt(i % CustomerPassword.val2.length) ^
              CustomerPassword.val1.charCodeAt(i % CustomerPassword.val1.length);

            encoded += String.fromCharCode(Number(charCode));
          }

          return btoa(encoded);
        },
      };

      const mappedFields = mapCreateAccountFromFormValues(values);

      sessionStorage.setItem('studentInfo', JSON.stringify(mappedFields.customFields));

      try {
        // if this fails then the customer already exists
        // then we just need to assosciate the customer with the order

        await createAccount({
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: CustomerPassword.Encode(values.email),
          customFields: mappedFields.customFields,
        });
      } catch (ex) {
        const password = CustomerPassword.Encode(values.email);

        try {
          await signIn({ email: values.email, password });
        } catch (ex) {}
      }

      onSubmit(values);
    },
    mapPropsToValues: ({ requiresMarketingConsent }) => {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: 'TEMPASS123!@#',
        customFields: {},
        acceptsMarketingEmails: requiresMarketingConsent ? [] : ['0'],
      };
    },
    validationSchema: ({ language, formFields }: CreateAccountFormProps & WithLanguageProps) => {
      const passwordRequirements = formFields.find(
        ({ requirements }) => requirements,
      )?.requirements;

      if (!passwordRequirements) {
        throw new Error('Password requirements missing');
      }

      const schema = getCreateCustomerValidationSchema({
        language,
        formFields,
        passwordRequirements: getPasswordRequirements(passwordRequirements),
      });

      return schema;
    },
  })(CreateAccountForm),
);
