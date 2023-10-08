import React, { useEffect, useState } from "react";
import user from "../../../../img/user.png";
import {
    PostViewContainer,
    PostViewTitle,
    PostViewDescription,
    PostViewWrapper,
    PostCommentsContainer,
    PostViewFooter,
    PostReplyIcon,
    PostViewImage,
    PostViewBody,
} from "../style";
import { useParams } from "react-router-dom";
import { getPost, getAllComments } from "../api";
import AddComment from "../comment/add/AddComment";
import Comment from "../comment/Comment";
import { generateTime } from "../time";

const PostView = () => {
    const [show, setShow] = useState(false);
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getPost(setPost, id);
        getAllComments(id, setComment);
    }, [id]);

    return (
        <PostViewContainer>
            <PostViewWrapper>
                <PostViewImage src={user} alt="user" />

                <PostViewBody>
                    <PostViewTitle>
                        {post.title}{" "}
                        {"( " +
                            generateTime(post.createdAt).newTimeDiff +
                            " " +
                            generateTime(post.createdAt).timeName +
                            " ago )"}
                    </PostViewTitle>
                    <PostViewDescription>
                        {post.description}
                    </PostViewDescription>
                    <PostViewFooter>
                        <PostReplyIcon
                            onClick={() => setShow(true)}
                            className="fa-solid fa-reply"
                            title="reply"
                        />
                    </PostViewFooter>

                    <PostCommentsContainer>
                        {comment.map((el, index) => (
                            <Comment
                                key={index}
                                name={el.name}
                                comment={el.commentText}
                                time={el.createdAt}
                            />
                        ))}
                    </PostCommentsContainer>
                </PostViewBody>
            </PostViewWrapper>

            {show && <AddComment setShow={setShow} id={id} />}
        </PostViewContainer>
    );
};

export default PostView;
