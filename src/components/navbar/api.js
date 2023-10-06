import axios from "axios";

export const logOut = async () => {
    try {
        await axios.delete("/user/logout");

        window.location.href = "/login";
    } catch (error) {
        console.log(error);
    }
};
