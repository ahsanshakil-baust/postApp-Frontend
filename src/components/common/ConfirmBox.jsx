import React from "react";
import styled from "styled-components";

const ConfirmWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center !important;
    align-items: center;
`;
const ConfirmDiv = styled.div`
    background-color: #fff !important;
    border: 1px solid #198754;
    width: 400px;
    height: 200px;
    margin-left: 400px;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;

    @media screen and (max-width: 1675px) {
        margin-left: 350px;
    }

    @media screen and (max-width: 1024px) {
        margin-left: 0;
    }

    @media screen and (max-width: 500px) {
        width: 280px;
        height: 150px;
    }
`;
const ConfirmText = styled.div`
    padding: 10px;
    font-size: 15px;

    @media screen and (max-width: 500px) {
        font-size: 13px;
    }
`;
const ButtonsDiv = styled.div`
    padding: 1rem;
    button {
        padding: 5px 20px;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 0.25rem;
        font-size: 15px;

        &:first-child {
            background-color: #198754;
            margin-right: 10px;
        }

        &:last-child {
            background-color: #dc3545;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 0.5rem;

        button {
            padding: 3px 16px;
            font-size: 13px;
        }
    }
`;
const ConfirmButton = styled.button``;
const CancelButton = styled.button``;

const ConfirmBox = ({
    action,
    setAlert,
    id,
    setSuccessMsg,
    setError,
    setProcessingMsg,
}) => {
    return (
        <ConfirmWrapper>
            <ConfirmDiv>
                <ConfirmText>Do you want to delete?</ConfirmText>
                <ButtonsDiv>
                    <ConfirmButton
                        onClick={(e) => {
                            action(
                                id,
                                setSuccessMsg,
                                setError,
                                setProcessingMsg
                            );
                            setAlert(false);
                        }}
                    >
                        Yes
                    </ConfirmButton>
                    <CancelButton
                        onClick={() => {
                            setAlert(false);
                        }}
                    >
                        No
                    </CancelButton>
                </ButtonsDiv>
            </ConfirmDiv>
        </ConfirmWrapper>
    );
};

export default ConfirmBox;
