import React, { useState } from "react";
import Message from "../../../../common/Message";
import { FormWrapper, Form } from "./style";
import { addComment } from "./api";

const AddComment = ({ setShow, id }) => {
    const [comment, setComment] = useState({
        name: "",
        email: "",
        commentText: "",
        errorObj: {},
    });

    const [successMsg, setSuccessMsg] = useState("");
    const [processingMsg, setProcessingMsg] = useState("");

    const handleChange = (e) => {
        setComment((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(id, comment, setComment, setProcessingMsg, setSuccessMsg);
    };

    return (
        <FormWrapper>
            <i onClick={() => setShow(false)} className="fa-solid fa-xmark"></i>
            <div className="post__heading">New Comment</div>

            <Message
                error={
                    comment.errorObj.common
                        ? comment.errorObj.common.msg
                            ? comment.errorObj.common.msg
                            : comment.errorObj.common
                        : ""
                }
                successMsg={successMsg}
                processingMsg={processingMsg}
            />

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Name :"
                    name="name"
                    value={comment.name}
                />
                <input
                    type="email"
                    onChange={handleChange}
                    placeholder="Email :"
                    name="email"
                    value={comment.email}
                />
                <textarea
                    value={comment.commentText}
                    onChange={handleChange}
                    name="commentText"
                    placeholder="Comment :"
                ></textarea>

                <button type="submit">Submit</button>
            </Form>
        </FormWrapper>
    );
};

export default AddComment;
