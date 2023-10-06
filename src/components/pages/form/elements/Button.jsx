import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
    border: none;
    outline: none;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    background: #7de1e6;
    color: white;
    margin: 18px 0;

    @media (max-width: 576px) {
        font-size: 12.5px;
    }

    @media (max-width: 376px) {
        font-weight: 500;
        margin: 15px 0;
        padding: 7.5px 12.5px;
    }
`;

const Button = ({ text, ...rest }) => {
    return <Buttons {...rest}>{text}</Buttons>;
};

export default Button;
