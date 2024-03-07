import axios from "axios"

// export const createCategory = async(category) => {
//     return await axios.post('http://192.168.10.242:8000/slug/', category)
// }

// export const getCategory = async() => {
//     return await axios.get('http://192.168.10.242:8000/slug/')
// }

// export const updateCategory = async(category) => {
//     return await axios.put(`http://192.168.10.242:8000/slug/${'id'}`, category)
// }

export const createCategory = async (category) => {
    return await axios.post('http://localhost:8000/category', category)
}

export const getCategory = async () => {
    return await axios.get('http://localhost:8000/product')
}

export const updateCategory = async(params,data) => {
    console.log(4444444,params.slug,data,"lllddddddddddddddddd");
    return await axios.put(`http://localhost:8000/category/${params.slug}`, data)
}

