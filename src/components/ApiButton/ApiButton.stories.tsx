import React from 'react';
import { Story, Meta } from '@storybook/react';

import ApiButton from './ApiButton';
import { ApiButtonProps } from './ApiButton.types';

export default {
    title: 'Wayflyer/ApiButton',
    component: ApiButton,
    argTypes: {},
} as Meta<typeof ApiButton>;

const Template: Story<ApiButtonProps> = (args) => <ApiButton {...args} />;

export const Default = Template.bind({});

Default.args = {
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
    requestCallback: (data: object) => console.log('Status callback!', data),
    url: 'https://httpbin.org/delay/3',
};

export const Timeout = Template.bind({});

Timeout.args = {
    requestTimeout: 3000,
    disabled: false,
    buttonText: {
        default: 'Launch Rocket',
        error: 'Launch Rocket',
        fetching: 'Launching',
    },
    tooltipText: {
        default: 'Ignites the fuel',
        error: 'Ignition error',
        fetching: 'Cancel launch',
    },
    requestCallback: (data: any) => console.log('Status callback!', data),
    url: 'https://httpbin.org/delay/5',
};

export const Fetching = Template.bind({});

Fetching.args = {
    requestTimeout: 3000,
    disabled: false,
    isFetching: true,
    hasError: false,
    buttonText: {
        default: 'Launch Rocket',
        error: 'Launch Rocket',
        fetching: 'Launching',
    },
    tooltipText: {
        default: 'Ignites the fuel',
        error: 'Ignition error',
        fetching: 'Cancel launch',
    },
    requestCallback: (data: object) => console.log('Status callback!', data),
    url: 'https://httpbin.org/delay/5',
};

export const Error = Template.bind({});

Error.args = {
    requestTimeout: 3000,
    disabled: false,
    isFetching: false,
    hasError: true,
    buttonText: {
        default: 'Launch Rocket',
        error: 'Launch Rocket',
        fetching: 'Launching',
    },
    tooltipText: {
        default: 'Ignites the fuel',
        error: 'Ignition error',
        fetching: 'Cancel launch',
    },
    requestCallback: (data: object) => console.log('Status callback!', data),
    url: 'https://httpbin.org/delay/5',
};
