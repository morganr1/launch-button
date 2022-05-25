import React from 'react';
import { Tooltip, Loader } from '../ApiButton.styles';
import { render } from '@testing-library/react';
import 'jest-styled-components';

describe('ApiButton styled components', () => {
    it('<Tooltip /> renders correctly', () => {
        const { asFragment } = render(
            <div>
                <Tooltip status="default" disabled={true}>
                    Hi Tooltip
                </Tooltip>
            </div>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('<Loader /> renders correctly', () => {
        const { asFragment } = render(
            <div>
                <Loader status="default" disabled={true} />
            </div>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
