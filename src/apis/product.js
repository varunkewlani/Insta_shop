import axios from "axios"

export const createProduct = async (category) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/product`, category)
}

export const getProducts = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/product`)
}

// export const updateCategory = async(params,data) => {
//     return await axios.put(`${process.env.REACT_APP_API_URL}/category/${params.slug}`, data)
// }

// export const deleteCategory = async(params) => {
//     console.log(params,"ppppppppp");
//     return await axios.delete(`${process.env.REACT_APP_API_URL}/category/${params}`)
// }
