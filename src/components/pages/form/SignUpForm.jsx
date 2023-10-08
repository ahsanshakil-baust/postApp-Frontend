import { NavLink } from "react-router-dom";
import Input from "./elements/Input";
import Button from "./elements/Button";
import { useState } from "react";
import styled from "styled-components";
import { signUp } from "./api";
import Message from "../../common/Message";

const FormDiv = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;

    @media (max-width: 768px) {
        padding: 20px 0;
    }

    @media (max-width: 576px) {
        padding: 10px 0;
    }

    @media (max-width: 376px) {
        padding: 20px 0;
    }
`;

const FormLayer = styled.div`
    min-width: 500px;
    border: 1px solid #7de1e6;
    background-color: #fff;
    z-index: 100;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    h1 {
        font-size: 30px;
        letter-spacing: 1px;
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        min-width: 60%;
        box-shadow: none;

        h1 {
            color: #7de1e6;
            letter-spacing: 2px;
        }
    }

    @media (max-width: 576px) {
        min-width: 80%;

        h1 {
            font-size: 25px;
        }
    }

    @media (max-width: 376px) {
        min-width: 90%;
    }
`;

const SignUpForm = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        errorObj: {},
    });

    const [passType, setPassType] = useState("password");
    const [confirmPassType, setConfirmPassType] = useState("password");
    const [processingMsg, setProcessingMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleType = (e) => {
        const selector = e.target.parentElement.parentElement.firstChild;

        // checking proccess and change type
        if (selector.name === "password") {
            passType === "password"
                ? setPassType("text")
                : setPassType("password");
        }

        if (selector.name === "cpassword") {
            confirmPassType === "password"
                ? setConfirmPassType("text")
                : setConfirmPassType("password");
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        signUp(user, setUser, setProcessingMsg, setSuccessMsg);
    };

    return (
        <FormDiv>
            <FormLayer>
                <h1>SignUp</h1>
                <form
                    onSubmit={submitHandler}
                    style={{
                        width: "80%",
                        margin: "auto",
                        position: "relative",
                    }}
                >
                    <Message
                        error={
                            user.errorObj.common
                                ? user.errorObj.common.msg
                                    ? user.errorObj.common.msg
                                    : user.errorObj.common
                                : ""
                        }
                        successMsg={successMsg}
                        processingMsg={processingMsg}
                    />

                    <Input
                        type="text"
                        name="username"
                        label="Username"
                        onChange={handleChange}
                        value={user.username}
                        errorText={
                            user.errorObj.username && user.errorObj.username.msg
                        }
                        fw="fa-user"
                    />

                    <Input
                        type="text"
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        value={user.email}
                        errorText={
                            user.errorObj.email && user.errorObj.email.msg
                        }
                        fw="fa-envelope"
                    />

                    <Input
                        type={passType}
                        name="password"
                        label="Password"
                        onChange={handleChange}
                        value={user.password}
                        errorText={
                            user.errorObj.password && user.errorObj.password.msg
                        }
                        fw="fa-lock"
                        handleType={handleType}
                    />

                    <Input
                        type={confirmPassType}
                        name="cpassword"
                        label="Confirm Password"
                        onChange={handleChange}
                        value={user.cpassword}
                        errorText={
                            user.errorObj.password && user.errorObj.password.msg
                        }
                        fw="fa-lock"
                        handleType={handleType}
                    />

                    <div>
                        <span>
                            Already have an account ?
                            <NavLink to="/login">Sign In</NavLink>
                        </span>
                    </div>

                    <div>
                        <Button text="Create a new Account" />
                    </div>
                </form>
            </FormLayer>
        </FormDiv>
    );
};

export default SignUpForm;
