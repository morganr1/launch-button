import { FC } from 'react';

interface StatusText {
    default: string;
    error: string;
    fetching: string;
}
interface ApiButtonProps {
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
    requestCallback: () => void;
}

declare const ApiButton: FC<ApiButtonProps>;

export { ApiButton };
