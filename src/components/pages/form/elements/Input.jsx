import React from "react";
import styled from "styled-components";

/* Input Componenet */

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    margin: 37px 0;
    position: relative;

    input {
        border: none;
        outline: none;
        width: 100%;
        padding: 5px;
        padding-left: 25px;
        letter-spacing: 0.5px;
        color: rgb(61, 65, 68);
        border-bottom: 1px solid lightgray;
    }

    label {
        align-self: flex-start;
        position: absolute;
        top: 5px;
        left: 30px;
        color: lightslategray;
        font-size: 12px;
        pointer-events: none;
        transition: 0.3s ease-in-out;
    }

    i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        font-size: 12px;
        color: rgb(60, 63, 65);
        transition: 0.3s ease-in-out;
    }

    div {
        position: absolute;
        cursor: pointer;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
        text-transform: capitalize;

        i {
            font-size: 12px;
        }
    }

    @media (min-width: 769px) {
        input:focus ~ i,
        input[value]:not([value=""]) ~ i {
            font-size: 11px;
        }
        span {
            position: absolute;
            background-color: #7de1e6;
            width: 0 !important;
            height: 2px;
            bottom: 0;
            left: 0;
            transition: 0.5s ease-in-out;
        }

        input:focus ~ label,
        input[value]:not([value=""]) ~ label {
            top: -12px;
            font-size: 10px;
            color: #7de1e6;
            font-weight: 500;
            letter-spacing: 1px;
        }

        input:focus ~ span,
        input[value]:not([value=""]) ~ span {
            width: 100% !important;
        }
    }

    @media (max-width: 768px) {
        input {
            border: 1px solid lightgray;
            padding: 8px 10px;
            border-radius: 3px;
        }
        label {
            top: -18px;
            left: 5px;
        }
        .iconHide {
            display: none;
        }
        i {
            bottom: 8px;
        }
    }

    @media (max-width: 576px) {
        input {
            padding: 5px 8px;
        }
    }
`;

const ErrorText = styled.p`
    color: rgba(201, 10, 10, 0.768);
    font-size: 10px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    position: absolute;
    right: 0;
    bottom: 27px;
`;

const Input = ({
    name,
    label,
    errorText,
    classes,
    fw,
    handleType,
    iconHide,
    ...rest
}) => {
    return (
        <InputDiv className={classes}>
            <input autoComplete="off" {...rest} name={name} id={name} />
            <i className={`fa-solid iconHide ${fw}`}></i>
            {name === "password" ||
            name === "cpassword" ||
            name === "vpassword" ? (
                <div>
                    <i
                        onClick={handleType}
                        title="Show Password"
                        className="fa-solid fa-key"
                    ></i>
                </div>
            ) : null}
            <label htmlFor={name}>{label}</label>
            <ErrorText>{errorText}</ErrorText>
            <span></span>
        </InputDiv>
    );
};

export default Input;
