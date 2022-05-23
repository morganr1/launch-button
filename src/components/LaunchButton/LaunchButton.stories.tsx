import React from 'react';
import { Story, Meta } from '@storybook/react';

import LaunchButton from './LaunchButton';
import { LaunchButtonProps } from './LaunchButton.types';

export default {
    title: 'Wayflyer/LaunchButton',
    component: LaunchButton,
    argTypes: {},
} as Meta<typeof LaunchButton>;

const Template: Story<LaunchButtonProps> = (args) => <LaunchButton {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
    text: 'Launch Rocket',
    disabled: false,
    timeout: 1000,
    buttonText: {
        default: 'Launch Rocket',
        error: 'Launch Rocket',
        fetching: 'Launching',
    },
    tooltipText: {
        default: 'Ignites the fuel ',
        error: 'Ignition error',
        fetching: 'Cancel launch',
    },
    onClickCallback: (status) => console.log('Status callback!', status),
    url: 'https://httpbin.org/delay/4',
};
