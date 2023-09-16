import $api, {API_URL} from '../API'
import axios from "axios";

export default class AuthServices {
    static async register(username, email, password) {
        return await axios.post(`${API_URL}/v1/user/register/`, {username, email, password}, {withCredentials: true})
    }

    static async login(username, password) {
        return await $api.post('v1/user/login/', {username, password}, {withCredentials: true})
    }

    static async logout(refresh_token) {
        return await axios.post(`${API_URL}/v1/user/logout/`, {refresh_token}, {withCredentials: true})
    }

    static async verify(token) {
        return await axios.post(`${API_URL}/v1/user/verify/`, {token}, {withCredentials: true})
    }

    static async refresh(refresh) {
        return await axios.post(`${API_URL}/v1/user/refresh/`, {refresh}, {withCredentials: true})
    }
}