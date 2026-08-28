import { CustomItem } from '@bigcommerce/checkout-sdk';

import getDisplayQuantity from './getDisplayQuantity';
import { OrderSummaryItemProps } from './OrderSummaryItem';

function mapFromCustom(item: CustomItem): OrderSummaryItemProps {
    return {
        id: item.id,
        quantity: getDisplayQuantity(item),
        amount: item.extendedListPrice,
        name: item.name,
    };
}

export default mapFromCustom;
