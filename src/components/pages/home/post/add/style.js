import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #03810b5d;
    border-radius: 0.5rem;
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 40px;
    z-index: 10;

    @media screen and (max-width: 480px) {
        padding: 10px 20px;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .post__heading {
        font-size: 25px;
        padding: 10px 0;
    }

    i {
        font-size: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
        color: red;
        cursor: pointer;

        @media screen and (max-width: 480px) {
            color: #e74e53;
            right: 10px;
            top: 10px;
            font-size: 25px;
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
        width: 500px;
        padding: 8px 10px;
        margin: 10px 0;
        font-size: 15px;
        border: 1px solid #03810b5d;
        border-radius: 5px;

        &:focus {
            outline: 1px solid #03810b5d;
        }

        &::placeholder {
            font-size: 15px;
        }

        @media screen and (max-width: 576px) {
            width: 370px;
        }

        @media screen and (max-width: 480px) {
            width: 320px;
        }

        @media screen and (max-width: 376px) {
            width: 300px;
        }
    }

    textarea {
        height: 250px;
    }

    & > button {
        border: 0;
        background-color: #3ca744;
        color: #fff;
        padding: 8px 20px;
        border-radius: 3px;
        font-size: 15px;
        margin-top: 20px;
    }
`;
