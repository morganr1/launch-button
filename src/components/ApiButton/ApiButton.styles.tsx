import styled, { keyframes } from 'styled-components';
import {
    ButtonProps,
    ButtonWrapperProps,
    StatusProps,
} from './ApiButton.types';

/* Util Functions */
export const getStatusStyles = (status: string) =>
    status === 'error' ? '#FF0000' : status === 'fetching' ? '#FF7900' : '#000';

/* Keyframes */
const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

/* Styled Components */
export const Button = styled.button<ButtonProps>`
    border: 2;
    border-color: ${({ status }) => getStatusStyles(status)};
    display: inline-block;
    border-style: solid;
    background-color: #ffffff;
    width: 133px;
    height: 40px;
    cursor: pointer;
    color: ${({ status }) => getStatusStyles(status)};
    &:disabled {
        opacity: 1;
        border: 2px solid #000000;
        cursor: not-allowed;
        background-color: #f5f5f5;
        color: rgba(0, 0, 0, 0.7);
    }
`;

export const Tooltip = styled.div<StatusProps>`
    color: #ffffff;
    width: 133px;
    height: 30px;
    margin-top: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ status }) => getStatusStyles(status)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    &:after {
        content: ' ';
        position: absolute;
        top: 52px;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        border-color: ${({ status }) => getStatusStyles(status)};
        border-width: 16px;
        border-top-width: 0px;
        border-style: solid;
        border-color: transparent transparent
            ${({ status }) => getStatusStyles(status)} transparent;
    }
`;

export const ToolTipText = styled.p`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    line-height: 14px;
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    width: fit-content;
    height: fit-content;
`;

export const Loader = styled.div<StatusProps>`
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 20px;
    margin-left: -4px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 50%;
    border-color: ${({ disabled }) => (disabled ? '#fff' : '#ff7900')}
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    -webkit-animation: ${Spin} 1s linear infinite;
    animation: ${Spin} 1s linear infinite;
`;

export const ButtonContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonText = styled.p<StatusProps>`
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    line-height: 14.06px;
    font-size: 12px;
    font-weight: 400;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}};
`;
