import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 650px;
    background-color: #fff;
    margin: 10px 0;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const CommenterName = styled.div`
    border-bottom: 1px solid #ebeaea;
    padding: 5px 10px;
    font-weight: 500;
`;

export const CommentText = styled.div`
    padding: 10px;
`;
