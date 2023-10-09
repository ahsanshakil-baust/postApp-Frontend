import styled from "styled-components";

export const AboutWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    margin: auto;
    padding: 20px 40px;

    @media screen and (max-width: 420px) {
        padding: 20px;
    }
`;

export const AuthorName = styled.div`
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const AuthorDescription = styled.div`
    width: 100%;
    text-align: justify;
`;
