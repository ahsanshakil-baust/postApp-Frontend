import React, { useState } from "react";
import Message from "../../../../common/Message";
import { FormWrapper, Form } from "./style";
import { addNewPost, UpdatePost } from "./api";
import { useAuth } from "../../../../context/Context";

const AddPost = ({ setShow, title, desc, id }) => {
    const { userDetails } = useAuth();
    const [post, setPost] = useState({
        user: userDetails.user.username,
        title: title ? title : "",
        description: desc ? desc : "",
        email: userDetails.user.email,
        errorObj: {},
    });

    const [successMsg, setSuccessMsg] = useState("");
    const [processingMsg, setProcessingMsg] = useState("");

    const handleChange = (e) => {
        setPost((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && desc && id) {
            UpdatePost(post, id, setPost, setProcessingMsg, setSuccessMsg);
        } else {
            addNewPost(post, setPost, setProcessingMsg, setSuccessMsg);
        }
    };

    return (
        <FormWrapper>
            <i onClick={() => setShow(false)} className="fa-solid fa-xmark"></i>
            <div className="post__heading">New Post</div>

            <Message
                error={
                    post.errorObj.common
                        ? post.errorObj.common.msg
                            ? post.errorObj.common.msg
                            : post.errorObj.common
                        : ""
                }
                successMsg={successMsg}
                processingMsg={processingMsg}
            />

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Title :"
                    name="title"
                    value={post.title}
                />
                <textarea
                    value={post.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Description :"
                ></textarea>

                <button type="submit">Submit</button>
            </Form>
        </FormWrapper>
    );
};

export default AddPost;
