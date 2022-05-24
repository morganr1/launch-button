import { controlledFetchRequest } from '../AppButton.utils';

describe('ApiButton Utils', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('makeControlledRequest success', async () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([{ id: 1 }]),
            })
        );

        const mockRequestParams = {
            controllerRef: {
                current: null,
            },
            setRequestStatus: jest.fn(),
            callback: jest.fn(),
            requestTimeout: 1000,
            url: 'https://httpbin.org/delay/3',
        };
        await controlledFetchRequest(mockRequestParams);
        expect(mockRequestParams.setRequestStatus).toHaveBeenCalledTimes(2);
        expect(mockRequestParams.callback).toHaveBeenCalledTimes(1);
    });

    it('makeControlledRequest failure', async () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.reject({
                ok: false,
                error: {
                    message: 'It went bang!',
                },
            })
        );

        const mockRequestParams = {
            controllerRef: {
                current: null,
            },
            setRequestStatus: jest.fn(),
            callback: jest.fn(),
            requestTimeout: 1000,
            url: 'https://httpbin.org/delay/3',
        };
        await controlledFetchRequest(mockRequestParams);
        expect(mockRequestParams.setRequestStatus).toHaveBeenCalledTimes(2);
        expect(mockRequestParams.callback).toHaveBeenCalledTimes(1);
    });

    it('makeControlledRequest timeout', async () => {
        jest.useFakeTimers();
        global.fetch = jest.fn().mockImplementation(() =>
            setTimeout(
                () =>
                    Promise.resolve({
                        ok: true,
                        json: () => Promise.resolve([{ id: 1 }]),
                    }),
                4000
            )
        );

        const mockRequestParams = {
            controllerRef: {
                current: null,
            },
            setRequestStatus: jest.fn(),
            callback: jest.fn(),
            requestTimeout: 2000,
            url: 'https://httpbin.org/delay/3',
        };
        await controlledFetchRequest(mockRequestParams);
        jest.advanceTimersByTime(3000);
        expect(mockRequestParams.setRequestStatus).toHaveBeenCalledTimes(1);
    });
});
