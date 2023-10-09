import axios from "axios";
const url = process.env.REACT_APP_URL;

export const getAllPosts = async (setPost) => {
    try {
        const response = await axios.get(`${url}/post/getAll`, {
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

    console.log(id);
    try {
        await axios.delete(`${url}/post/delete/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
            // params: {
            //     id,
            // },
        });

        setProcessingMsg("");
        setSuccessMsg("Deleted Successfully !");
        window.location.reload();
    } catch (error) {
        setProcessingMsg("");
        setError(error.response.data.errors);
    }
};

export const getPost = async (setPost, id) => {
    try {
        const response = await axios.get(`${url}/post/getPost/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
        });

        setPost(response.data.post);
    } catch (error) {}
};

export const getAllComments = async (id, setPost) => {
    try {
        const response = await axios.get(`${url}/comment/${id}/getAll`, {
            headers: {
                "Content-type": "application/json",
            },
        });

        setPost(response.data.comments);
    } catch (error) {}
};
