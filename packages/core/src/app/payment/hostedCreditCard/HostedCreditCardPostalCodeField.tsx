import React, { FunctionComponent, useCallback } from 'react';

import { TranslatedString } from '@bigcommerce/checkout/locale';
import { TextInputIframeContainer } from '@bigcommerce/checkout/ui';

import { FormField } from '../../ui/form';

export interface HostedCreditCardPostalCodeFieldProps {
  appearFocused: boolean;
  id: string;
  name: string;
}

const HostedCreditCardPostalCodeField: FunctionComponent<HostedCreditCardPostalCodeFieldProps> = ({
  appearFocused,
  id,
  name,
}) => {
  const renderInput = useCallback(
    () => <TextInputIframeContainer appearFocused={appearFocused} id={id} />,
    [id, appearFocused],
  );

  return (
    <FormField
      additionalClassName="form-field--ccPostalCode"
      input={renderInput}
      labelContent={<TranslatedString id="payment.credit_card_postal_code_label" />}
      name={name}
    />
  );
};

export default HostedCreditCardPostalCodeField;
