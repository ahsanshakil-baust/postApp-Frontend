import React from "react";
import styled from "styled-components";

const Alert = styled.div`
    position: sticky,
    right: 0,
    top: -30px,
    width: 100%,
    font-size: 12px,
    padding: 5px 10px,
    text-align: center,
    z-index: 10,
`;

const Message = ({ error, processingMsg, successMsg }) => {
    return (
        <div>
            {error !== "" && (
                <Alert className="alert alert-danger" role="alert">
                    {error}
                </Alert>
            )}

            {processingMsg !== "" && (
                <Alert className="alert alert-warning" role="alert">
                    {processingMsg}
                    <div
                        style={{
                            marginLeft: "10px",
                        }}
                        className="spinner-border text-warning"
                        role="status"
                    ></div>
                </Alert>
            )}

            {successMsg !== "" && (
                <Alert className="alert alert-success" role="alert">
                    {successMsg}
                </Alert>
            )}
        </div>
    );
};

export default Message;
