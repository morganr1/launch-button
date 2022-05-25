import { ControlledRequestParams, ControlledRequest } from './ApiButton.types';

export const controlledFetchRequest: ControlledRequest = async (
    controlRequestParams: ControlledRequestParams
) => {
    const {
        controllerRef,
        setRequestStatus,
        requestCallback,
        requestTimeout,
        url,
    } = controlRequestParams;
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
        setRequestStatus({ fetching: true, error: false });
        requestTimeout &&
            setTimeout(() => {
                controllerRef.current?.abort();
            }, requestTimeout);
        const response = await fetch(url, {
            signal: controllerRef.current.signal,
        });
        if (response.ok) {
            const body = await response.json();
            requestCallback(body);
            setRequestStatus({
                fetching: false,
                error: false,
            });
            controllerRef.current = null;
        }
    } catch (error: unknown) {
        requestCallback({ error });
        setRequestStatus({ fetching: false, error: true });
    }
};
