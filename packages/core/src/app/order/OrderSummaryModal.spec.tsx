import { Order } from '@bigcommerce/checkout-sdk';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { getStoreConfig } from '../config/config.mock';
import { SMALL_SCREEN_MAX_WIDTH } from '../ui/responsive';

import mapToOrderSummarySubtotalsProps from './mapToOrderSummarySubtotalsProps';
import { getOrder } from './orders.mock';
import OrderSummaryModal from './OrderSummaryModal';

let order: Order;
let orderSummary: ShallowWrapper;

describe('OrderSummaryModal', () => {
    beforeEach(() => {
        order = getOrder();

        orderSummary = shallow(
            <OrderSummaryModal
                isOpen={true}
                {...mapToOrderSummarySubtotalsProps(order)}
                additionalLineItems="foo"
                lineItems={order.lineItems}
                shopperCurrency={getStoreConfig().shopperCurrency}
                storeCurrency={getStoreConfig().currency}
                total={order.orderAmount}
            />,
        );
    });

    it('renders order summary', () => {
        expect(orderSummary).toMatchSnapshot();
    });

    describe('when taxes are inclusive', () => {
        it('displays tax as summary section', () => {
            const taxIncludedOrder = {
                ...getOrder(),
                isTaxIncluded: true,
            };

            orderSummary = shallow(
                <OrderSummaryModal
                    {...mapToOrderSummarySubtotalsProps(taxIncludedOrder)}
                    isOpen={true}
                    lineItems={taxIncludedOrder.lineItems}
                    shopperCurrency={getStoreConfig().shopperCurrency}
                    storeCurrency={getStoreConfig().currency}
                    total={taxIncludedOrder.orderAmount}
                />,
            );

            expect(orderSummary).toMatchSnapshot();

            expect(orderSummary.find('.cart-taxItem')).toHaveLength(1);
        });
    });

    describe('is updated modal UI on mobile screens', () => {
        beforeAll(() => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: jest.fn().mockImplementation(query => ({
                    matches: window.innerWidth <= SMALL_SCREEN_MAX_WIDTH,
                    media: query,
                    onchange: null,
                    addListener: jest.fn(),
                    removeListener: jest.fn(),
                    addEventListener: jest.fn(),
                    removeEventListener: jest.fn(),
                    dispatchEvent: jest.fn(),
                })),
            });
        });

        it('displays continue to checkout button', () => {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                value: 500,
            });

            const mountedOrderSummary = mount(
                <OrderSummaryModal
                    {...mapToOrderSummarySubtotalsProps(getOrder())}
                    isOpen={true}
                    isUpdatedCartSummayModal={true}
                    lineItems={getOrder().lineItems}
                    shopperCurrency={getStoreConfig().shopperCurrency}
                    storeCurrency={getStoreConfig().currency}
                    total={getOrder().orderAmount}
                />,
            );

            expect(mountedOrderSummary.find('button')).toHaveLength(1);
        });
    });
});
