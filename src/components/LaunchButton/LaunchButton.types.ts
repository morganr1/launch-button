import { MouseEventHandler } from "react";

export interface LaunchButtonProps {
    text: string,
    disabled?: boolean,
    working?: boolean,
    hasError?: boolean,
    url?: string,
    size?: "small" | "medium" | "large",
    ariaLabel?: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}