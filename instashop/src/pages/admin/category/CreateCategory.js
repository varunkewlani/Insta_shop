import React, { useEffect, useState } from 'react'
import { AdminDashboard } from '../../AdminDashboard'
import { createCategory, deleteCategory, getCategory } from '../../../apis/category';
import { Link } from 'react-router-dom';

export const CreateCategory = () => {

    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        getCategory()
            .then((res) => setCategories(res.data))
            .catch((error) => console.log('Error fetching categories:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name };

        createCategory(data)
            .then(() => {
                // After creating category, fetch updated list of categories
                fetchCategories();
                // Clear the input field after submission
                setName('');
            })
            .catch((error) => console.log('Error creating category:', error));
    };

    const handleDelete = (categoryId) => {
        deleteCategory(categoryId)
            .then(() => {
                // After deleting category, fetch updated list of categories
                fetchCategories();
            })
            .catch((error) => console.log('Error deleting category:', error));
    };


    return (
        <div className="container">
            <h2 className="checkout-heading my-5">CATEGORIES</h2>
            <AdminDashboard />

            <div className='d-flex justify-content-between flex-wrap'>
                {/* Search Category Input */}
                <div className='my-2 flex-grow-1'>
                    <input type="text" className='p-2 rounded-1 border' placeholder="Search Category" />
                </div>

                {/* Create Category Input and Button */}
                <div className='my-2 flex-grow-1 flex-md-grow-0'>
                    <input
                        type="text"
                        className='p-2 rounded-1 border me-md-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Create Category"
                    />
                    <button className='btn btn-outline-dark rounded-0 ms-3' onClick={handleSubmit}>
                        Create
                    </button>
                </div>
            </div>

            {categories.length > 0 ? (
                <table className="table border-top">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" className='text-secondary py-1'>#</th>
                            <th scope="col" className='text-secondary py-1'>Name</th>
                            <th scope="col" className='text-secondary py-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <th className='small py-1'>{index + 1}</th>
                                <td className='fw-normal small py-1'>{category.name}</td>
                                <td className='py-1'>
                                    <Link to={`/updateCategory/${category.id}`}>
                                        <i className="fa-solid fa-pen-to-square text-success me-3 small"></i>
                                    </Link>
                                    <span onClick={() => handleDelete(category.id)}>
                                        <i className="fa-solid fa-trash text-danger small"></i>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="emptycart-centered-text text-center py-5 my-3 fs-3 fw-bold" style={{ color: "#D09683" }}>
                    Please Create Category From Right Corner Box
                </div>
            )}
        </div>
    )
}



// 