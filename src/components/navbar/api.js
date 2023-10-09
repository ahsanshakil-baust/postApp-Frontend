import axios from "axios";
import Cookies from "js-cookie";

const url = process.env.REACT_APP_URL;

export const logOut = async () => {
    try {
        await axios.delete(`${url}/user/logout`);
        Cookies.remove("user");
        window.location.href = "/login";
    } catch (error) {
        console.log(error);
    }
};
