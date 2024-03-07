import axios from "axios"

export const createUser = async (data) => {
    return await axios.post('http://192.168.10.242:8000/register/', data)
}

export const checkUser = async (data) => {
    return await axios.post('http://192.168.10.242:8000/login/', data)
}