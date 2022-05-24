import React from 'react';
import { getStatusStyles, Tooltip, Loader } from '../AppButton.styles';
import { render, screen } from '@testing-library/react';
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
