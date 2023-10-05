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

const CommentDiv = ({ user, setSuccessMsg, setProcessingMsg, setError }) => {
    const [alert, setAlert] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const handleDelete = (id, setSuccessMsg, setError, setProcessingMsg) => {
        console.log(id);
    };
    return (
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
                </CommentHead>

                <CommentTitle>
                    <span> Title:</span>
                    <NavLink to="#">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum, quia.
                    </NavLink>
                </CommentTitle>

                <CommentMessage>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat, neque. Quas officiis quos hic ab voluptate quae
                    recusandae sapiente vitae!
                </CommentMessage>

                <CommentFooter>
                    <i className="fa-regular fa-pen-to-square" title="edit"></i>
                    <i
                        onClick={() => {
                            setAlert(true);
                            setDeleteId(1);
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
