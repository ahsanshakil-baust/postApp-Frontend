import React, { useState } from "react";
import {
    PostBox,
    PostFooter,
    PostHead,
    PostMessage,
    PostTitle,
} from "../style";

import ConfirmBox from "../../../common/ConfirmBox";
import { NavLink, useNavigate } from "react-router-dom";
import { deletePost } from "../api";
import AddPost from "./add/AddPost";
import { useAuth } from "../../../context/Context";
import { generateTime } from "../time";

const PostDiv = ({
    user,
    setSuccessMsg,
    setProcessingMsg,
    setError,
    name,
    title,
    desc,
    id,
    time,
    email,
}) => {
    const { userDetails, sendPostDetails } = useAuth();

    const [alert, setAlert] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleDelete = (id, setSuccessMsg, setError, setProcessingMsg) => {
        if (userDetails.user) {
            deletePost(id, setSuccessMsg, setError, setProcessingMsg);
            window.location.reload();
        } else {
            navigate("/login");
        }
    };

    const handleEdit = () => {
        userDetails.user ? setShow(true) : navigate("/login");
    };

    const handleSendDetails = () => {
        sendPostDetails({
            id,
            title,
            desc,
        });
    };

    return (
        <PostBox>
            <div className="comment_img">
                <img src={user} alt="user" />
            </div>

            <div className="comment_body">
                <PostHead>
                    <div className="comment_head_left">
                        <div className="commeter_name">{name}</div>
                        <div className="commented_time">
                            {generateTime(time).newTimeDiff +
                                " " +
                                generateTime(time).timeName +
                                " "}
                            ago
                        </div>
                    </div>
                </PostHead>

                <PostTitle>
                    <span> Title:</span>
                    <NavLink
                        onClick={handleSendDetails}
                        to={`/view-post/${id}`}
                    >
                        {title}
                    </NavLink>
                </PostTitle>

                <PostMessage>{desc}</PostMessage>
                {userDetails.user && userDetails.user.email === email && (
                    <PostFooter>
                        <i
                            onClick={handleEdit}
                            className="fa-regular fa-pen-to-square"
                            title="edit"
                        ></i>

                        <i
                            onClick={() => {
                                setAlert(true);
                                setDeleteId(id);
                            }}
                            className="fa-solid fa-trash-can"
                            title="delete"
                        ></i>
                    </PostFooter>
                )}
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

            {show && (
                <AddPost setShow={setShow} title={title} desc={desc} id={id} />
            )}
        </PostBox>
    );
};

export default PostDiv;
