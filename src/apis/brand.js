import axios from "axios"

export const createBrand = async (brand) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/brand`, brand)
}

export const getBrand = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/brand`)
}

export const updateBrand = async(params,data) => {
    return await axios.put(`${process.env.REACT_APP_API_URL}/brand/${params.slug}`, data)
}

export const deleteBrand = async(params) => {
    console.log(params,"ppppppppp");
    return await axios.delete(`${process.env.REACT_APP_API_URL}/brand/${params}`)
}
