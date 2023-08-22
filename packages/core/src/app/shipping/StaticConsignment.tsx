import { Address, Cart, Consignment } from '@bigcommerce/checkout-sdk';
import React, { FunctionComponent, memo } from 'react';

import AddressType from '../address/AddressType';
import StaticAddress from '../address/StaticAddress';

import './StaticConsignment.scss';
import { StaticShippingOption } from './shippingOption';
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

  return (
    <div className="staticConsignment">
      <StaticAddress address={address} type={AddressType.Shipping} />

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

      {selectedShippingOption && (
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
