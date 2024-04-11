import axios from "axios"

export const createCategory = async (category) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/category`, category)
}

export const getCategory = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/product`)
}

export const updateCategory = async(params,data) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/category/${params.slug}`, data)
}
