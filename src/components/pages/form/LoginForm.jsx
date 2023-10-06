import Input from "./elements/Input";
import Button from "./elements/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { login } from "./api";
import { loginValidate } from "./validation";
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

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        errorObj: {},
    });

    const [passType, setPassType] = useState("password");
    const [processingMsg, setProcessingMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleType = (e) => {
        passType === "password" ? setPassType("text") : setPassType("password");
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

        const { isValid, errors } = loginValidate(user);

        if (isValid) {
            login(user, setUser, setProcessingMsg, setSuccessMsg);
        } else {
            setUser((prevState) => ({
                ...prevState,
                errorObj: errors,
            }));
        }
    };

    return (
        <FormDiv>
            <FormLayer>
                <h1>Login</h1>
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

                    <div>
                        <span>
                            Don't have an account ?
                            <NavLink to="/signup">SignUp</NavLink>
                        </span>
                    </div>

                    <div>
                        <Button text="Login" />
                    </div>
                </form>
            </FormLayer>
        </FormDiv>
    );
};

export default LoginForm;
