import React, { useState } from "react";
import { CommentContainer, NewPost } from "./style";

import user from "../../../img/user.png";
import AddPost from "../../post/add/AddPost";
import CommentDiv from "./commentDiv/CommentDiv";

const Home = () => {
    const [show, setShow] = useState(false);

    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [processingMsg, setProcessingMsg] = useState("");

    return (
        <CommentContainer>
            <h1 className="heading">All Posts</h1>
            <NewPost onClick={() => setShow(true)}>New Post</NewPost>

            <CommentDiv
                user={user}
                setSuccessMsg={setSuccessMsg}
                setProcessingMsg={setProcessingMsg}
                setError={setError}
            />

            {show && <AddPost setShow={setShow} />}
        </CommentContainer>
    );
};

export default Home;
