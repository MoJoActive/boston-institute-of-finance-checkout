interface LineItemWithQuantity {
    quantity: number;
    listPrice: number;
    salePrice?: number;
    comparisonPrice?: number;
    extendedListPrice: number;
    extendedSalePrice?: number;
    extendedComparisonPrice?: number;
}

// BigCommerce can return quantity: 1 while extended prices reflect the true count
export default function getDisplayQuantity(item: LineItemWithQuantity): number {
    const unitPrice = item.comparisonPrice ?? item.salePrice ?? item.listPrice;
    const extendedPrice = item.extendedComparisonPrice ?? item.extendedSalePrice ?? item.extendedListPrice;

    if (!unitPrice || unitPrice <= 0 || !extendedPrice) return item.quantity;

    const calculatedQuantity = extendedPrice / unitPrice;
    const roundedQuantity = Math.round(calculatedQuantity);

    if (roundedQuantity > item.quantity && Math.abs(calculatedQuantity - roundedQuantity) < 0.01)
        return roundedQuantity;

    return item.quantity;
}
