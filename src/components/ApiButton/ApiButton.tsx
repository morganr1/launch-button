import React, { FC, useEffect, useState } from 'react';
import { ApiButtonProps, HandleHover } from './ApiButton.types';
import { useFetch } from '../../hooks/useFetch';
import {
    Button,
    Tooltip,
    ToolTipText,
    ButtonWrapper,
    ButtonContent,
    ButtonText,
    Loader,
} from './ApiButton.styles';

const ApiButton: FC<ApiButtonProps> = ({
    disabled = false,
    url,
    ariaLabel,
    requestTimeout,
    isFetching = false,
    hasError = false,
    requestCallback,
    buttonText,
    tooltipText,
    ...props
}) => {
    const {
        error,
        fetching,
        requestResponse,
        cancellable,
        makeRequest,
        abortRequest,
    } = useFetch({ isFetching, hasError, url, requestTimeout });
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    useEffect(() => {
        requestCallback({ requestResponse });
    }, [requestResponse]);

    const handleHover: HandleHover = (show) => {
        setShowTooltip(show);
    };

    const handleClick = () => {
        if (fetching) {
            abortRequest();
        }
        if (cancellable) {
            abortRequest();
        }
        if (error || !fetching) {
            makeRequest();
        }
    };
    const currentStatus = error ? 'error' : fetching ? 'fetching' : 'default';
    const allowToolTip = (error && !disabled) || (!disabled && showTooltip);

    return (
        <ButtonWrapper
            onMouseOver={() => handleHover(true)}
            onMouseOut={() => handleHover(false)}
            onFocus={() => handleHover(true)}
            onBlur={() => handleHover(false)}
            onKeyDown={({ key }) => key === 'Escape' && handleHover(false)}
        >
            <Button
                id="api-button-container"
                type="button"
                status={currentStatus}
                onClick={handleClick}
                disabled={disabled}
                aria-relevant="text"
                aria-describedby="api-button-tooltip"
                {...props}
            >
                <ButtonContent>
                    <ButtonText disabled={disabled} status={currentStatus}>
                        {buttonText[currentStatus]}
                    </ButtonText>
                    {fetching && (
                        <Loader
                            data-testid="api-button-loader"
                            status={currentStatus}
                            disabled={disabled}
                        />
                    )}
                </ButtonContent>
            </Button>
            {allowToolTip && (
                <Tooltip
                    disabled={disabled}
                    id="api-button-tooltip"
                    aria-live="polite"
                    aria-relevant="text"
                    onFocus={() => !disabled && handleHover(true)}
                    onBlur={() => !disabled && handleHover(false)}
                    onClick={handleClick}
                    status={currentStatus}
                >
                    <ToolTipText>{tooltipText[currentStatus]}</ToolTipText>
                </Tooltip>
            )}
        </ButtonWrapper>
    );
};

export default ApiButton;
