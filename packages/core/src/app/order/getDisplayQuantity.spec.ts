import getDisplayQuantity from './getDisplayQuantity';

describe('getDisplayQuantity()', () => {
    it('returns quantity when extended price matches quantity', () => {
        expect(
            getDisplayQuantity({
                quantity: 2,
                listPrice: 100,
                salePrice: 100,
                comparisonPrice: 100,
                extendedListPrice: 200,
                extendedSalePrice: 200,
                extendedComparisonPrice: 200,
            }),
        ).toBe(2);
    });

    it('derives quantity from extended price when quantity is understated', () => {
        expect(
            getDisplayQuantity({
                quantity: 1,
                listPrice: 100,
                salePrice: 100,
                comparisonPrice: 100,
                extendedListPrice: 200,
                extendedSalePrice: 200,
                extendedComparisonPrice: 200,
            }),
        ).toBe(2);
    });

    it('returns quantity when extended price does not imply a higher count', () => {
        expect(
            getDisplayQuantity({
                quantity: 1,
                listPrice: 100,
                salePrice: 80,
                comparisonPrice: 80,
                extendedListPrice: 80,
                extendedSalePrice: 80,
                extendedComparisonPrice: 80,
            }),
        ).toBe(1);
    });
});
