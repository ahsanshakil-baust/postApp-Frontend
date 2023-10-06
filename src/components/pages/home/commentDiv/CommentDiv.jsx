import React, { useState } from "react";
import {
    CommentBox,
    CommentFooter,
    CommentHead,
    CommentMessage,
    CommentTitle,
} from "../style";

import ConfirmBox from "../../../common/ConfirmBox";
import { NavLink } from "react-router-dom";
import { deletePost } from "../api";

const CommentDiv = ({
    user,
    setSuccessMsg,
    setProcessingMsg,
    setError,
    name,
    title,
    desc,
    id,
    time,
}) => {
    const [alert, setAlert] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const [errorObj, setErrorObj] = useState({});

    const handleDelete = (id, setSuccessMsg, setError, setProcessingMsg) => {
        deletePost(id, setSuccessMsg, setError, setProcessingMsg);
        window.location.reload();
    };
    return (
        <CommentBox>
            <div className="comment_img">
                <img src={user} alt="user" />
            </div>

            <div className="comment_body">
                <CommentHead>
                    <div className="comment_head_left">
                        <div className="commeter_name">{name}</div>
                        <div className="commented_time">1 min ago</div>
                    </div>
                </CommentHead>

                <CommentTitle>
                    <span> Title:</span>
                    <NavLink to="#">{title}</NavLink>
                </CommentTitle>

                <CommentMessage>{desc}</CommentMessage>

                <CommentFooter>
                    <i className="fa-regular fa-pen-to-square" title="edit"></i>
                    <i
                        onClick={() => {
                            setAlert(true);
                            setDeleteId(id);
                        }}
                        className="fa-solid fa-trash-can"
                        title="delete"
                    ></i>

                    {/* <div className="right">
                        <i className="fa-solid fa-reply" title="reply"></i>
                    </div> */}
                </CommentFooter>
            </div>

            {alert && (
                <ConfirmBox
                    action={handleDelete}
                    id={deleteId}
                    setAlert={setAlert}
                    setSuccessMsg={setSuccessMsg}
                    setError={setError}
                    setProcessingMsg={setProcessingMsg}
                />
            )}
        </CommentBox>
    );
};

export default CommentDiv;
