import React, { useEffect, useState } from "react";
import { CommentContainer, NewPost } from "./style";

import user from "../../../img/user.png";
import AddPost from "../../post/add/AddPost";
import CommentDiv from "./commentDiv/CommentDiv";
import { useAuth } from "../../context/Context";
import { getAllPosts } from "./api";

const Home = () => {
    const [show, setShow] = useState(false);
    const { userDetails } = useAuth();

    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [processingMsg, setProcessingMsg] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts(setPosts);
    }, []);

    console.log(posts);

    return (
        <CommentContainer>
            <h1 className="heading">All Posts</h1>
            <NewPost onClick={() => setShow(true)}>New Post</NewPost>

            {posts.map((post, index) => (
                <CommentDiv
                    key={index}
                    user={user}
                    setSuccessMsg={setSuccessMsg}
                    setProcessingMsg={setProcessingMsg}
                    setError={setError}
                    id={post._id}
                    title={post.title}
                    desc={post.description}
                    time={post.createdAt}
                    name={post.user}
                />
            ))}

            {show && <AddPost setShow={setShow} />}
        </CommentContainer>
    );
};

export default Home;
