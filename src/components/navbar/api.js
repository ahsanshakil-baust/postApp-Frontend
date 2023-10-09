import axios from "axios";

const url = process.env.REACT_APP_URL;

export const logOut = async () => {
    try {
        await axios.delete(`/user/logout`);

        window.location.href = "/login";
    } catch (error) {
        console.log(error);
    }
};
