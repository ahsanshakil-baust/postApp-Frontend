import React, { useState } from "react";
import {
    CommentBox,
    CommentContainer,
    CommentHead,
    CommentMessage,
    CommentTitle,
    NewPost,
} from "./style";

import user from "../../../img/user.png";
import AddPost from "../../post/add/AddPost";

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <CommentContainer>
            <h1 className="heading">All Posts</h1>
            <NewPost onClick={() => setShow(true)}>New Post</NewPost>
            <CommentBox>
                <div className="comment_img">
                    <img src={user} alt="user" />
                </div>

                <div className="comment_body">
                    <CommentHead>
                        <div className="comment_head_left">
                            <div className="commeter_name">saidur rahman</div>
                            <div className="commented_time">1 min ago</div>
                        </div>

                        <div className="comment_head_right">
                            <i className="fa-solid fa-reply"></i>
                        </div>
                    </CommentHead>

                    <CommentTitle>
                        <span> Title:</span>
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, quia.
                        </span>
                    </CommentTitle>

                    <CommentMessage>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugiat, neque. Quas officiis quos hic ab voluptate
                        quae recusandae sapiente vitae!
                    </CommentMessage>
                </div>
            </CommentBox>

            {show && <AddPost setShow={setShow} />}
        </CommentContainer>
    );
};

export default Home;
