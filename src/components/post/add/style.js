import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #03810b5d;
    border-radius: 0.5rem;
    position: relative;
    padding: 4rem;

    .heading {
        font-size: 2rem;
        padding: 1rem 0;
    }

    i {
        font-size: 3rem;
        position: absolute;
        right: -4rem;
        top: -4rem;
        color: #fff;
        cursor: pointer;

        @media screen and (max-width: 480px) {
            color: #e74e53;
            right: 1rem;
            top: 1rem;
            font-size: 2.5rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    textarea {
        width: 40rem;
        padding: 1rem 1.5rem;
        margin: 1rem 0;
        font-size: 1.5rem;
        border: 1px solid #03810b5d;

        &::placeholder {
            font-size: 1.5rem;
        }

        @media screen and (max-width: 576px) {
            width: 37rem;
        }

        @media screen and (max-width: 480px) {
            width: 35rem;
        }

        @media screen and (max-width: 376px) {
            width: 34rem;
        }
    }

    input[type="file"] {
        font-size: 1.5rem;

        &::file-selector-button {
            cursor: pointer;
        }
    }

    input[type="file"]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #3ca743;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background 0.2s ease-in-out;
    }

    input[type="file"]::file-selector-button:hover {
        background: #3ca743be;
    }

    & > button {
        border: 0;
        background-color: #3ca744;
        color: #fff;
        padding: 8px 20px;
        border-radius: 3px;
        font-size: 1.5rem;
        margin-top: 2rem;
    }
`;
