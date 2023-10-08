import React from "react";
import { CommentContainer, CommentText, CommenterName } from "./style";

const Comment = ({ name, comment }) => {
    return (
        <CommentContainer>
            <CommenterName>{name}</CommenterName>
            <CommentText>{comment}</CommentText>
        </CommentContainer>
    );
};

export default Comment;
