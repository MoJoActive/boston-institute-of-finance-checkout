import { CheckoutSelectors, CustomerRequestOptions, CustomError } from '@bigcommerce/checkout-sdk';
import { noop } from 'lodash';
import React, { FunctionComponent } from 'react';

import { CheckoutContextProps } from '@bigcommerce/checkout/payment-integration-api';

import { withCheckout } from '../checkout';
import { isErrorWithType } from '../common/error';
import { Button, ButtonSize, ButtonVariant } from '../ui/button';

import canSignOut, { isSupportedSignoutMethod } from './canSignOut';

export interface CustomerInfoProps {
  onSignOut?(event: CustomerSignOutEvent): void;
  onSignOutError?(error: CustomError): void;
}

export interface CustomerSignOutEvent {
  isCartEmpty: boolean;
}

interface WithCheckoutCustomerInfoProps {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  methodId: string;
  isSignedIn: boolean;
  isSigningOut: boolean;
  signOut(options?: CustomerRequestOptions): Promise<CheckoutSelectors>;
}

const CustomerInfo: FunctionComponent<CustomerInfoProps & WithCheckoutCustomerInfoProps> = ({
  email,
  firstName,
  lastName,
  phone,
  company,
  methodId,
  isSignedIn,
  isSigningOut,
  onSignOut = noop,
  onSignOutError = noop,
  signOut,
}) => {
  const handleSignOut: () => Promise<void> = async () => {
    try {
      if (isSupportedSignoutMethod(methodId)) {
        await signOut({ methodId });
        onSignOut({ isCartEmpty: false });
        window.location.reload();
      } else {
        await signOut();
        onSignOut({ isCartEmpty: false });
      }
    } catch (error) {
      if (isErrorWithType(error) && error.type === 'checkout_not_available') {
        onSignOut({ isCartEmpty: true });
      } else {
        onSignOutError(error);
      }
    }
  };

  return (
    <div className="customerView" data-test="checkout-customer-info">
      <div className="customerView-body optimizedCheckout-contentPrimary" data-test="customer-info">
        <div>
          {firstName} {lastName}
        </div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{company}</div>
      </div>

      <div className="customerView-actions">
        {isSignedIn && (
          <Button
            isLoading={isSigningOut}
            onClick={handleSignOut}
            size={ButtonSize.Tiny}
            testId="sign-out-link"
            variant={ButtonVariant.Secondary}
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

function mapToWithCheckoutCustomerInfoProps({
  checkoutService,
  checkoutState,
}: CheckoutContextProps): WithCheckoutCustomerInfoProps | null {
  const {
    data: { getBillingAddress, getCheckout, getCustomer },
    statuses: { isSigningOut },
  } = checkoutState;

  const billingAddress = getBillingAddress();
  const checkout = getCheckout();
  const customer = getCustomer();

  if (!billingAddress || !checkout || !customer) {
    return null;
  }

  const methodId =
    checkout.payments && checkout.payments.length === 1 ? checkout.payments[0].providerId : '';

  const studentInfo = JSON.parse(sessionStorage.getItem('studentInfo') || '[]');
  const phone = studentInfo
    ? studentInfo?.find((o: any) => o.fieldId === 'field_29')?.fieldValue
    : null;
  const company = studentInfo
    ? studentInfo?.find((o: any) => o.fieldId === 'field_30')?.fieldValue
    : null;

  return {
    email: billingAddress.email || customer.email,
    firstName: customer.firstName || billingAddress.firstName,
    lastName: customer.lastName|| billingAddress.lastName,
    phone,
    company,
    methodId,
    isSignedIn: canSignOut(customer, checkout, methodId),
    isSigningOut: isSigningOut(),
    signOut: checkoutService.signOutCustomer,
  };
}

export default withCheckout(mapToWithCheckoutCustomerInfoProps)(CustomerInfo);
