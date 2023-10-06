import axios from "axios";

// Signup
export const signUp = async (
    user,
    setError,
    setProcessingMsg,
    setSuccessMsg
) => {
    setError((prevState) => ({
        ...prevState,
        errorObj: {},
    }));

    setProcessingMsg("Processing...");
    try {
        await axios.post("/user/signup", JSON.stringify(user), {
            headers: {
                "Content-type": "application/json",
            },
        });

        setProcessingMsg("");

        setSuccessMsg("SignUp Done Successfully !");

        setTimeout(() => (window.location.href = "/login"), 3000);
    } catch (error) {
        setProcessingMsg("");
        setError((prevState) => ({
            ...prevState,
            errorObj: error.response.data.errors,
        }));
    }
};

// Login
export const login = async (
    user,
    setError,
    setProcessingMsg,
    setSuccessMsg
) => {
    setError((prevState) => ({
        ...prevState,
        errorObj: {},
    }));

    setProcessingMsg("Processing...");
    try {
        const response = await axios.post("/user/login", JSON.stringify(user), {
            headers: {
                "Content-type": "application/json",
            },
        });

        setProcessingMsg("");
        console.log(response.data);
        setSuccessMsg("Login Successfully !");
        setTimeout(() => (window.location.href = "/"), 3000);
    } catch (error) {
        setProcessingMsg("");
        setError((prevState) => ({
            ...prevState,
            errorObj: error.response.data.errors,
        }));
    }
};