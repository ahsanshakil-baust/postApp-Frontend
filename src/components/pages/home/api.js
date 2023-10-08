import axios from "axios";

export const getAllPosts = async (setPost) => {
    try {
        const response = await axios.get("/post/getAll", {
            headers: {
                "Content-type": "application/json",
            },
        });

        setPost(response.data.posts);
    } catch (error) {}
};

export const deletePost = async (
    id,
    setSuccessMsg,
    setError,
    setProcessingMsg
) => {
    setProcessingMsg("Loading...");
    try {
        await axios.delete(`/post/delete/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
            // params: {
            //     id,
            // },
        });

        setProcessingMsg("");
        setSuccessMsg("Deleted Successfully !");
    } catch (error) {
        setProcessingMsg("");
        setError(error.response.data.errors);
    }
};

export const getPost = async (setPost, id) => {
    try {
        const response = await axios.get(`/post/getPost/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
        });

        setPost(response.data.post);
    } catch (error) {}
};

export const getAllComments = async (id, setPost) => {
    try {
        const response = await axios.get(`/comment/${id}/getAll`, {
            headers: {
                "Content-type": "application/json",
            },
        });

        setPost(response.data.comments);
    } catch (error) {}
};
