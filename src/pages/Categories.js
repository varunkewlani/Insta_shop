import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/categories.css"
import axios from 'axios'

export const Categories = () => {

    const [categories, setCategories] = useState([])
    const [uniqueCategory, setUniqueCategory] = useState([])
    const url = "http://localhost:8000/product"

    console.log(uniqueCategory);

    useEffect(() => {
        axios.get(url).then((res) => {
            setCategories(res.data)
            const uc = [...new Set(res.data.map((c) => c.category))]
            setUniqueCategory(uc)
        }).catch((e) => console.log(e))
    }, [categories.length])



    return (
        <React.Fragment>
            <h2 className="shop-heading mt-5">CATEGORIES</h2>
            <div className='container p-3'>
                <div className='row px-3'>
                    {uniqueCategory && uniqueCategory.map((c, index) => <CategoriesItems category={c} index={index} />)}
                </div>
            </div>
        </React.Fragment>
    )
}

const CategoriesItems = ({ category, index }) => {
    const img = [
        "https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-single-3.jpg",
        "https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-single-3.jpg",
        "https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-single-3.jpg"
    ]

    return (
        <>
            <div className='col-lg-3 px-1 col-md-4 my-3 cat-card'>
                <div className='position-relative'>
                    <div className='position-absolute bottom-0 m-2 fs-3 fw-normal text-dark cat-text'>{category}</div>
                    <img src={img[index]} alt="categoryimage" className='w-100 h-100 my-3' />
                </div>
            </div>
        </>
    )
}

