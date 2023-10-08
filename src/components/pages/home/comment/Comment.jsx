import React from "react";
import { CommentContainer, CommentText, CommenterName } from "./style";
import { generateTime } from "../time";

const Comment = ({ name, comment, time }) => {
    return (
        <CommentContainer>
            <CommenterName>
                {name}{" "}
                {" ( " +
                    generateTime(time).newTimeDiff +
                    " " +
                    generateTime(time).timeName +
                    " ) ago"}
            </CommenterName>
            <CommentText>{comment}</CommentText>
        </CommentContainer>
    );
};

export default Comment;
