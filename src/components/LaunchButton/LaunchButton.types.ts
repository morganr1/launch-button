import React, { MouseEventHandler } from 'react';

export interface LaunchButtonProps {
    buttonText: {
        default: string;
        error: string;
        fetching: string;
    };
    url: 'string';
    timeout?: number;
    disabled?: boolean;
    hasError?: boolean;
    isFetching?: boolean;
    status: 'error' | 'fetching' | 'default';
    size?: 'small' | 'medium' | 'large';
    ariaLabel?: string;
    onClickCallback: Function;
    onClick: Function;
    tooltipText: {
        default: string;
        error: string;
        fetching: string;
    };
}
