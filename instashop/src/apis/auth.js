import axios from "axios"

export const createUser = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/user`, data)
}

export const userList = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/user`)
}