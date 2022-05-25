import { useState, useRef } from 'react';

interface Props {
    isFetching: boolean;
    hasError: boolean;
    requestTimeout: number | undefined;
    url: string;
}

export const useFetch = ({
    isFetching,
    hasError,
    requestTimeout,
    url,
}: Props) => {
    const [requestStatus, setRequestStatus] = useState({
        fetching: isFetching,
        error: hasError,
    });
    const { fetching, error } = requestStatus;
    const [requestResponse, setRequestResponse] = useState({});
    const controllerRef = useRef<AbortController | null>(null);

    const makeRequest = async () => {
        const controller = new AbortController();
        controllerRef.current = controller;
        try {
            setRequestStatus({ fetching: true, error: false });
            requestTimeout &&
                setTimeout(() => {
                    controllerRef.current?.abort();
                }, requestTimeout);
            const response = await fetch(url, {
                signal: controllerRef.current?.signal,
            });
            if (response.ok) {
                const body = await response.json();
                setRequestResponse(body);
                setRequestStatus({
                    fetching: false,
                    error: false,
                });
                controllerRef.current = null;
            }
        } catch (error) {
            setRequestResponse({ error });
            setRequestStatus({ fetching: false, error: true });
        }
    };

    const abortRequest = () => {
        controllerRef.current?.abort();
    };

    const cancellable = controllerRef.current?.abort ? true : false;

    return {
        error,
        fetching,
        cancellable,
        setRequestStatus,
        requestResponse,
        makeRequest,
        abortRequest,
    };
};
