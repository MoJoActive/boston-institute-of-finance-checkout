import { Address, Cart, Consignment } from '@bigcommerce/checkout-sdk';
import React, { FunctionComponent, memo } from 'react';


import { StaticShippingOption } from './shippingOption';
import './StaticConsignment.scss';
import StaticConsignmentItemList from './StaticConsignmentItemList';

interface StaticConsignmentProps {
  consignment: Consignment;
  cart: Cart;
  compactView?: boolean;
  billingAddress?: Address | undefined;
}

const StaticConsignment: FunctionComponent<StaticConsignmentProps> = ({
  consignment,
  cart,
  compactView,
  billingAddress,
}) => {
  const { shippingAddress: address, selectedShippingOption } = consignment;

  const containsOnlyDigital = cart.lineItems.physicalItems.every((o: any) =>
    o.customFields.some((cf: any) => cf.name === 'Digital' && cf.value === 'Yes'),
  );

  return (
    <div className="staticConsignment">
      {/* <StaticAddress address={address} type={AddressType.Shipping} /> */}

      <div className="vcard checkout-address--static">
        {(address.firstName || address.lastName) && (
          <p className="fn address-entry">
            <span className="first-name">{`${address.firstName} `}</span>
            <span className="family-name">{address.lastName}</span>
          </p>
        )}

        {(billingAddress as any)?.email && (
          <p className="address-entry">
            <span className="email">{(billingAddress as any).email}</span>
          </p>
        )}
      </div>

      {!compactView && <StaticConsignmentItemList cart={cart} consignment={consignment} />}

      {selectedShippingOption && !containsOnlyDigital && (
        <div>
          <div className="shippingOption shippingOption--alt shippingOption--selected">
            <StaticShippingOption
              displayAdditionalInformation={false}
              method={selectedShippingOption}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(StaticConsignment);
