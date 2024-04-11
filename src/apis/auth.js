import axios from "axios"

export const createUser = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/register/`, data)
}

export const checkUser = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/login/`, data)
}