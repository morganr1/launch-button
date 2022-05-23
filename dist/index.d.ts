import { MouseEventHandler, FC } from 'react';

interface LaunchButtonProps {
    text: string;
    disabled?: boolean;
    working?: boolean;
    hasError?: boolean;
    url?: string;
    size?: "small" | "medium" | "large";
    ariaLabel?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare const LaunchButton: FC<LaunchButtonProps>;

export { LaunchButton };
