import axios from "axios";

export const addComment = async (
    id,
    comment,
    setError,
    setProcessingMsg,
    setSuccessMsg
) => {
    setProcessingMsg("Loading...");
    try {
        await axios.post(`/comment/${id}/add`, JSON.stringify(comment), {
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
