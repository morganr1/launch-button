import React, {FC} from 'react';
import styled from 'styled-components';
import { LaunchButtonProps } from './LaunchButton.types';

const StyledLaunchButton = styled.button<LaunchButtonProps>`
    border: 2;
    border-color: #000000;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    display: inline-block;
    color: "#000000";
    background-color: ${props => props.disabled ? "#F5F5F5" : "#fff"};
    opacity: ${props => props.disabled ? 0.5 : 1};
    width: ${props => props.size === "small" ? "133px" : (props.size === "medium" ? "160px" : "180px")};
    height: ${props => props.size === "small" ? "40px" : (props.size === "medium" ? "60px" : "80px")};
    &:hover {
        background-color: "#6bedb5";
    }
    &:active {
        border: solid 2px #1b116e;
        padding: ${props => props.size === "small"? "5px 23px 6px" : (props.size === "medium"? "7px 28px 9px" : "12px 28px 14px" )};
    }
`;


const LaunchButton: FC<LaunchButtonProps> = ({ size, disabled, onClick, text, ...props}) => {
    return (
        <StyledLaunchButton text={text} type="button" onClick={onClick} disabled={disabled} size={size} {...props}>
            {text}
        </StyledLaunchButton>
    )
}

export default LaunchButton;