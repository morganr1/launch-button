import React from 'react';
import { Story, Meta } from '@storybook/react';

import LaunchButton from './LaunchButton';
import {LaunchButtonProps} from './LaunchButton.types';

export default {
    title: 'Wayflyer/LaunchButton',
    component: LaunchButton,
    argTypes: {
    },
} as Meta<typeof LaunchButton>;

const Template: Story<LaunchButtonProps> = (args) => <LaunchButton {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
    text: 'Launch Rocket',
    disabled: false,
    onClick: () => console.log('ROCKET LAUNCHED!'),
    size: 'small',
};

