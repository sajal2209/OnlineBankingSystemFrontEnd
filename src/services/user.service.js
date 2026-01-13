import axios from "axios";
import authHeader from "./auth-header";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8443/api") + "/banker/";

const updateProfile = (fullName, email, phoneNumber) => {
    return axios.put(API_URL + "profile", {
        fullName,
        email,
        phoneNumber
    }, { headers: authHeader() });
};

const UserService = {
    updateProfile
};

export default UserService;
