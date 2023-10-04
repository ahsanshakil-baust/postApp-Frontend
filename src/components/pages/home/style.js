import styled from "styled-components";

export const CommentContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 80px 40px;

    .heading {
        padding-bottom: 4rem;
    }

    @media screen and (max-width: 420px) {
        padding: 40px 20px;
    }
`;

export const CommentBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    .comment_img {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-right: 20px;

        @media screen and (max-width: 420px) {
            width: 35px;
            height: 35px;
            margin-right: 10px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .comment_body {
        border-radius: 2px;
        position: relative;
        width: 600px;
        max-width: calc(90% - 40px);

        @media screen and (max-width: 420px) {
            max-width: calc(100% - 50px);
        }

        &::before {
            content: "";
            position: absolute;
            border: 8px solid;
            border-color: transparent #fcfcfc transparent transparent;
            left: -16px;
            top: 9px;
        }
    }
`;

export const CommentHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    background-color: #fcfcfc;
    border-bottom: 1px solid rgb(224, 224, 224);
    align-items: center;
    border-radius: 5px 5px 0 0;

    .comment_head_left {
        display: flex;
        align-items: center;

        .commeter_name {
            margin-right: 15px;
            text-transform: capitalize;
        }

        .commented_time {
            font-size: 10px;
        }
    }

    .comment_head_right {
        cursor: pointer;
    }

    @media screen and (max-width: 420px) {
        padding: 4px 8px;

        .comment_head_left {
            .commeter_name {
                font-size: 14px;
            }
        }
    }
`;

export const CommentTitle = styled.div`
    padding: 6px 15px;
    font-size: 17px;
    background-color: #ffffff;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 500;

    span {
        &:first-child {
            margin-right: 4px;
        }
    }

    @media screen and (max-width: 420px) {
        padding: 4px 10px 2px 10px;
        font-size: 14px;
    }
`;

export const CommentMessage = styled.div`
    padding: 6px 15px;
    font-size: 15px;
    background-color: #ffffff;
    border-radius: 0 0 5px 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 420px) {
        padding: 4px 10px;
        font-size: 13px;
    }
`;

export const NewPost = styled.div`
    border: none;
    outline: none;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 0.75rem 2rem;
    cursor: pointer;
    border-radius: 0.25rem;
    font-weight: 500;
`;
