import { ControlledRequestParams } from './AppButton.types';

export const controlledFetchRequest = async (
    controlRequestParams: ControlledRequestParams
) => {
    const { controllerRef, setRequestStatus, callback, requestTimeout, url } =
        controlRequestParams;
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
        setRequestStatus({ fetching: true, error: false });
        requestTimeout &&
            setTimeout(() => {
                // If timeout provided, we should cancel the in flight request
                // if its duration exceeds the max duration provided via props
                controllerRef.current?.abort();
            }, requestTimeout);
        const response = await fetch(url, {
            signal: controllerRef.current.signal,
        });
        if (response.ok) {
            const body = await response.json();
            callback(body);
            setRequestStatus({
                fetching: false,
                error: false,
            });
            controllerRef.current = null;
        }
    } catch (error) {
        callback({ error });
        setRequestStatus({ fetching: false, error: true });
    }
};
