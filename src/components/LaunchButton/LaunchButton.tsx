import React, { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LaunchButtonProps } from './LaunchButton.types';

const statusStyles = (status: string) =>
    status === 'error' ? '#FF0000' : status === 'fetching' ? '#FF7900' : '#000';

const StyledToolTipText = styled.p<any>`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
`;

const StyledTooltip = styled.div<any>`
    color: #fff;
    width: 133px;
    height: 30px;
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ status }) => statusStyles(status)};
    &:after {
        content: ' ';
        position: absolute;
        top: 52px;
        border-color: ${({ status }) => statusStyles(status)};
        border-width: 16px;
        border-top-width: 0px;
        border-style: solid;
        border-color: transparent transparent
            ${({ status }) => statusStyles(status)} transparent;
    }
`;

const StyledLaunchButton = styled.button<LaunchButtonProps>`
    border: 2;
    border-color: ${({ status }) => statusStyles(status)};
    line-height: 14.06px;
    font-size: 12px;
    font-family: Roboto, sans-serif;
    cursor: pointer;
    font-weight: 400;
    display: inline-block;
    border-style: solid;
    color: ${({ status }) => statusStyles(status)};
    background-color: #fff;
    width: 133px;
    height: 40px;
    &:disabled {
        opacity: 1;
        border: 2px solid #000000;
        cursor: not-allowed;
        background-color: #f5f5f5;
        color: rgba(0, 0, 0, 0.7);
    }
`;

/* 
    Props 

    URL, // Component needs to make a GET request 
    loader? (component to replace default),
    children, // Text values or icon etc
    timeout?,
    onClickCallback?,
    size?,
    disabled,
    hasError?,
    isFetching,
    tooltips?: { 
        default: 'Ignities the fuel', //defaults
        working: 'Cancel launch', //defaults
        error: 'Ignition error', //defaults
    },

    Conditions

    1. if no timeout is provided then it should  return to normal state when request eventually completes
    2. Error state if the request exceeds a provided timeout value
    3. A click on the button when the state is working should cancel the inflight request and show an error state
    4. It should be possible to put the button into default / working / error state via props (hasError?, isLaunching?)
    5. Tooltip shouldn't show if the button is disabled
    6. Error state should not show if the button is disabled or working (I guess they mean if error is passed in via props - so like props priority)
    7. The tooltip should always show when in the error state
    8. The tooltip should show on hover for default / working states


    *<NOTES>
       -  Return status as part of a callback
       - Figure out how to get roboto fonts bundled with rollup
    </NOTES>


    hiarchy of status

    1. Disabled
    2. Error
    3. Fetching
    4. All others are false === default

*/

const LaunchButton: FC<LaunchButtonProps> = ({
    disabled = false,
    url,
    timeout,
    isFetching = false,
    hasError = false,
    status,
    onClick,
    onClickCallback,
    buttonText,
    tooltipText,
    ...props
}) => {
    const [requestStatus, setRequestStatus] = useState({
        fetching: isFetching,
        error: hasError,
    });
    const [showTooltip, setShowTooltip] = useState(false);
    const { fetching, error } = requestStatus;
    const controllerRef = useRef<AbortController | null>();

    const handleHover = (show: boolean) => {
        setShowTooltip(show);
    };

    const handleClick = async () => {
        if (controllerRef.current) {
            controllerRef.current.abort();
            setRequestStatus({ fetching: false, error: true });
        }
        if (error || !fetching) {
            const controller = new AbortController();
            controllerRef.current = controller;
            try {
                setRequestStatus({ fetching: true, error: false });
                const response = await fetch(url, {
                    signal: controllerRef.current?.signal,
                });
                response && (await response.json());
                console.log({ response });
                if (response.ok) {
                    setRequestStatus({
                        fetching: false,
                        error: false,
                    });
                    controllerRef.current = null;
                }
            } catch (error) {
                setRequestStatus({ fetching: false, error: true });
            }
        }
    };

    const currentStatus = error ? 'error' : fetching ? 'fetching' : 'default';
    console.log({ currentStatus });

    return (
        <div
            style={{
                width: 'fit-content',
                height: 'fit-content',
            }}
            onMouseOver={() => !disabled && handleHover(true)}
            onMouseOut={() => !disabled && handleHover(false)}
        >
            <StyledLaunchButton
                tooltipText={tooltipText}
                type="button"
                url={url}
                buttonText={buttonText}
                status={currentStatus}
                onClick={handleClick}
                onClickCallback={onClickCallback}
                disabled={disabled}
                {...props}
            >
                <p style={{ margin: 0, padding: 0 }}>
                    {buttonText[currentStatus]}
                </p>
            </StyledLaunchButton>
            {(error || showTooltip) && (
                <StyledTooltip status={currentStatus}>
                    <StyledToolTipText>
                        {tooltipText[currentStatus]}
                    </StyledToolTipText>
                </StyledTooltip>
            )}
        </div>
    );
};

export default LaunchButton;
