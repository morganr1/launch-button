import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, act, fireEvent } from '@testing-library/react';
import ApiButton from '../ApiButton';

describe('<ApiButton /> ', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const clickCallbackMock = jest.fn();
    const buttonProps = {
        disabled: false,
        buttonText: {
            default: 'Launch Rocket',
            error: 'Launch Rocket',
            fetching: 'Launching',
        },
        hasError: false,
        isFetching: false,
        tooltipText: {
            default: 'Ignites the fuel',
            error: 'Ignition error',
            fetching: 'Cancel launch',
        },
        callback: clickCallbackMock,
        url: 'https://httpbin.org/delay/3',
    };

    it('renders with default values', () => {
        const defaultProps = {
            ...buttonProps,
            disabled: undefined,
            hasError: undefined,
            isFetching: undefined,
        };
        const { asFragment } = render(<ApiButton {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('onClick fire a request against a provided url, displays loading state, subsequent click cancels the request.', async () => {
        global.fetch = jest
            .fn()
            .mockImplementation(() => Promise.resolve({ data: 100 }));
        render(<ApiButton {...buttonProps} />);
        expect(screen.queryByText('Launch Rocket')).toBeInTheDocument();
        userEvent.hover(screen.getByText('Launch Rocket'));
        expect(screen.queryByText('Ignites the fuel')).toBeInTheDocument();
        act(() => {
            fireEvent.click(screen.getByText('Launch Rocket'));
        });
        expect(screen.getByText('Launching')).toBeInTheDocument();
        userEvent.hover(screen.getByText('Launching'));
        expect(screen.queryByText('Cancel launch')).toBeInTheDocument();
        act(() => {
            fireEvent.click(screen.getByText('Launching'));
        });
        expect(screen.getByText('Ignition error')).toBeInTheDocument();
    });

    it('Handles mouse and keyboard interactivity', () => {
        render(<ApiButton {...buttonProps} />);
        const button = screen.getByText('Launch Rocket');
        //Hover
        userEvent.hover(button);
        expect(screen.queryByText('Ignites the fuel')).toBeInTheDocument();
        //Blur
        userEvent.unhover(button);
        expect(screen.queryByText('Ignites the fuel')).not.toBeInTheDocument();
        //Focus
        act(() => {
            fireEvent.focusIn(button);
        });
        expect(screen.queryByText('Ignites the fuel')).toBeInTheDocument();
        //Focus out
        act(() => {
            fireEvent.focusOut(button);
        });
        expect(screen.queryByText('Ignites the fuel')).not.toBeInTheDocument();
        // Dismiss tooltip on `ESCAPE` key press
        userEvent.hover(button);
        expect(screen.queryByText('Ignites the fuel')).toBeInTheDocument();
        act(() => {
            fireEvent.keyDown(button, { key: 'Escape' });
        });
        expect(screen.queryByText('Ignites the fuel')).not.toBeInTheDocument();
        userEvent.hover(button);
        act(() => {
            fireEvent.focus(screen.getByText('Ignites the fuel'));
        });
        expect(screen.getByText('Launch Rocket')).toBeInTheDocument();
        act(() => {
            fireEvent.blur(screen.getByText('Ignites the fuel'));
        });
        expect(screen.getByText('Launch Rocket')).toBeInTheDocument();
    });

    it('initializes in error state if hasError prop is passed as true', () => {
        const errorProps = { ...buttonProps, hasError: true };
        render(<ApiButton {...errorProps} />);
        expect(screen.queryByText('Ignition error')).toBeInTheDocument();
    });

    it('initializes in fetching state if isFetching prop is passed as true', () => {
        const fetchingProps = { ...buttonProps, isFetching: true };
        render(<ApiButton {...fetchingProps} />);
        expect(screen.queryByText('Launching')).toBeInTheDocument();
    });

    it('initalizes in disabled state if disabled prop is passed as true', () => {
        const disabledProps = { ...buttonProps, disabled: true };
        render(<ApiButton {...disabledProps} />);
        expect(screen.queryByText('Launch Rocket')).toBeInTheDocument();
        userEvent.hover(screen.getByText('Launch Rocket'));
        expect(screen.queryByText('Ignites the fuel')).not.toBeInTheDocument();
    });
});
