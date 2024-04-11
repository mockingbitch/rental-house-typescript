import axios from "axios";

const API_URL = import.meta.env.VITE_API_DOMAIN;

type DataType = {
    email?      : string,
    password?   : string,
}

const LoginService = async ({email, password}: DataType) => {
    return await axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            console.log(response);
            return response
        })
}

// const LogoutService = (token) => {
//     return axios.get(API_URL + "logout", { headers: {"Authorization" : `Bearer ${token}`} }).then(response => response.data)
// }

export {
    LoginService,
    // LogoutService,
}