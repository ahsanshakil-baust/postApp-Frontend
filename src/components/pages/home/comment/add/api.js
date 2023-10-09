import axios from "axios";
const url = process.env.REACT_APP_URL;

export const addComment = async (
    id,
    comment,
    setError,
    setProcessingMsg,
    setSuccessMsg
) => {
    setProcessingMsg("Loading...");
    try {
        await axios.post(`${url}/comment/${id}/add`, JSON.stringify(comment), {
            headers: {
                "Content-type": "application/json",
            },
        });

        setProcessingMsg("");

        setSuccessMsg("Comment Added Successfully !");

        setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
        setProcessingMsg("");
        setError((prevState) => ({
            ...prevState,
            errorObj: error.response.data.errors,
        }));
    }
};
