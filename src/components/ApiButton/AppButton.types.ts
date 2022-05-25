/**
 * Types
 */

export type HandleHover = (show: boolean) => void;
export type Status = 'error' | 'fetching' | 'default';
export type ControlledRequest = (params: ControlledRequestParams) => void;

/**
 * Interfaces
 */

export interface RequestStatus {
    fetching: boolean;
    error: boolean;
}

export interface ControlledRequestParams {
    controllerRef: {
        current: AbortController | null | undefined;
    };
    url: string;
    setRequestStatus: (requestStatus: RequestStatus) => void;
    callback: Function;
    requestTimeout: number | undefined;
}

interface StatusText {
    default: string;
    error: string;
    fetching: string;
}

export interface ApiButtonProps {
    /**
     * Text to display for each possible status
     */
    buttonText: StatusText;
    /**
     * Text displayed within the button tooltip for each of the possible button statuses
     */
    tooltipText: StatusText;
    /**
     * url or endpoint which the button will make a GET request against
     */
    url: string;
    /**
     * if passed, the value here will be the max duration a request can take before it will automatically be cancelled.
     * if not passed, requests will not be cancelled
     */
    requestTimeout?: number;
    /**
     * if the button is disabled or not
     */
    disabled?: boolean;
    /**
     *  if you wish to mount the component in an error state
     */
    hasError?: boolean;
    /**
     * if you wish to mount the component in a fetching state
     */
    isFetching?: boolean;
    /**
     * aria label to assign to the button for screen readers
     */
    ariaLabel?: string;
    /**
     * A callback function which will be called on success / failure of the api call
     * {Success} - Will return a response body in success cases
     * {Error} - Will return an error object in error case
     */
    requestCallback: Function;
}

export interface ButtonProps {
    id: string;
    type: string;
    disabled?: boolean;
    status: Status;
    ariaLabel?: string;
    onClick: () => void;
}

export interface ButtonWrapperProps {
    onMouseOver: Function;
    onMouseOut: Function;
}

export interface StatusProps {
    status: string;
    disabled?: boolean;
}
