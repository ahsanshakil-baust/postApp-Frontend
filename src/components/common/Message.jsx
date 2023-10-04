import React from "react";
import styled from "styled-components";

const Alert = styled.div`
    position: sticky,
    right: 0,
    top: -3rem,
    width: 100%,
    fontSize: 1.6rem,
    padding: 1rem 2rem,
    textAlign: center,
    zIndex: 10,
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
                            marginLeft: "1rem",
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
