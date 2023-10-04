import React, { useState } from "react";
import Message from "../../common/Message";
import { FormWrapper, Form } from "./style";

const AddPost = ({ setShow }) => {
    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const [error, setError] = useState("");
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
    };

    return (
        <FormWrapper>
            <i onClick={() => setShow(false)} className="fa-solid fa-xmark"></i>
            <div className="heading">New Post</div>

            <Message
                error={error}
                successMsg={successMsg}
                processingMsg={processingMsg}
            />

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title :"
                    name="title"
                    value={post.title}
                />
                <textarea
                    value={post.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Description:"
                ></textarea>

                <button type="submit">Submit</button>
            </Form>
        </FormWrapper>
    );
};

export default AddPost;
