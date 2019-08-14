import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';
import { noop } from 'lodash';
import React from 'react';

import { getStoreConfig } from '../../config/config.mock';
import { createLocaleContext, LocaleContext, LocaleContextType } from '../../locale';
import { ChecklistItem } from '../../ui/form';
import { LoadingOverlay } from '../../ui/loading';

import { getShippingOption } from './shippingMethod.mock';
import ShippingOptionsList from './ShippingOptionsList';
import StaticShippingOption from './StaticShippingOption';

describe('ShippingOptionsList Component', () => {
    let localeContext: LocaleContextType;
    const shippingOptions = [
        {
            ...getShippingOption(),
            id: 'foo',
        },
        {
            ...getShippingOption(),
            id: 'bar',
        },
    ];

    const onSelected = jest.fn();

    beforeEach(() => {
        localeContext = createLocaleContext(getStoreConfig());
    });

    it('renders shipping option list with expected props', () => {
        const component = mount(
            <LocaleContext.Provider value={ localeContext }>
                <Formik
                    onSubmit={ noop }
                    initialValues={ { } }
                >
                    <ShippingOptionsList
                        inputName="c_id"
                        consignmentId="c_id"
                        selectedShippingOptionId="bar"
                        shippingOptions={ shippingOptions }
                        isLoading={ true }
                        onSelectedOption={ onSelected }
                    />
                </Formik>
            </LocaleContext.Provider>
        );

        expect(component.find(LoadingOverlay).prop('isLoading')).toBeTruthy();
        expect(component.find(ChecklistItem).length).toEqual(2);
        expect(component
            .find(StaticShippingOption)
            .at(0)
            .prop('method')
        )
            .toMatchObject(shippingOptions[0]);

        expect(component
            .find('.form-checklist-item--selected')
            .find(StaticShippingOption)
            .prop('method')
        )
            .toMatchObject(shippingOptions[1]);
    });

    it('does not render if there are no shipping optionss', () => {
        let component = shallow(<ShippingOptionsList
            inputName="c_id"
            consignmentId="c_id"
            isLoading={ false }
            onSelectedOption={ onSelected }
        />);

        expect(component.getElement()).toBeFalsy();

        component = shallow(<ShippingOptionsList
            inputName="c_id"
            consignmentId="c_id"
            shippingOptions={ [] }
            isLoading={ false }
            onSelectedOption={ onSelected }
        />);

        expect(component.getElement()).toBeFalsy();
    });
});