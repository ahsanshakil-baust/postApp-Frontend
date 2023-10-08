import React, { useEffect, useState } from "react";
import user from "../../../../img/user.png";
import {
    PostViewContainer,
    PostViewTitle,
    PostViewDescription,
    PostViewWrapper,
    PostCommentsContainer,
    PostCommentBox,
    PostViewFooter,
    PostReplyIcon,
    PostViewImage,
    PostViewBody,
} from "../style";
import { useParams } from "react-router-dom";
import { getPost, getAllComments } from "../api";
import AddComment from "../comment/add/AddComment";

const PostView = () => {
    const [show, setShow] = useState(false);
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getPost(setPost, id);
        getAllComments(id, setComment);
    }, [id]);

    console.log(comment);

    console.log(post);
    return (
        <PostViewContainer>
            <PostViewWrapper>
                <PostViewImage src={user} alt="user" />

                <PostViewBody>
                    <PostViewTitle>
                        {post.title} {"( " + post.createdAt + " ago )"}
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
                </PostViewBody>
            </PostViewWrapper>

            {show && <AddComment setShow={setShow} id={id} />}

            <PostCommentsContainer>
                <PostCommentBox></PostCommentBox>
            </PostCommentsContainer>
        </PostViewContainer>
    );
};

export default PostView;
