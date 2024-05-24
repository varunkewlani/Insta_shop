import React, { useEffect, useState } from 'react'
import { AdminDashboard } from '../../AdminDashboard'
import { createBrand, deleteBrand, getBrand } from '../../../apis/brand';
import { Link } from 'react-router-dom';

export const CreateBrand = () => {

    const [name, setName] = useState('');
    const [brands, setBrands] = useState([]);


    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = () => {
        getBrand()
            .then((res) => setBrands(res.data))
            .catch((error) => console.log('Error fetching brands:', error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name };

        createBrand(data)
            .then(() => {
                fetchBrands();
                setName('');
            })
            .catch((error) => console.log('Error creating brand:', error));
    };

    const handleDelete = (brandId) => {
        deleteBrand(brandId)
            .then(() => {
                // After deleting brand, fetch updated list of brands
                fetchBrands();
            })
            .catch((error) => console.log('Error deleting brand:', error));
    };


    return (
        <div className="container">
            <h2 className="checkout-heading my-5">BRANDS</h2>
            <AdminDashboard />

            <div className='d-flex justify-content-between flex-wrap'>
                {/* Search Brand Input */}
                <div className='my-2 flex-grow-1'>
                    <input type="text" className='p-2 rounded-1 border' placeholder="Search Brand" />
                </div>

                {/* Create Brand Input and Button */}
                <div className='my-2 flex-grow-1 flex-md-grow-0'>
                    <input
                        type="text"
                        className='p-2 rounded-1 border me-md-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Create Brand"
                    />
                    <button className='btn btn-outline-dark rounded-0 ms-3' onClick={handleSubmit}>
                        Create
                    </button>
                </div>
            </div>

            {brands.length > 0 ? (
                <table className="table border-top">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" className='text-secondary py-1'>#</th>
                            <th scope="col" className='text-secondary py-1'>Name</th>
                            <th scope="col" className='text-secondary py-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((brand, index) => (
                            <tr key={brand.id}>
                                <th className='small py-1'>{index + 1}</th>
                                <td className='fw-normal small py-1'>{brand.name}</td>
                                <td className='py-1'>
                                    <Link to={`/updateBrand/${brand.id}`}>
                                        <i className="fa-solid fa-pen-to-square text-success me-3 small"></i>
                                    </Link>
                                    <span onClick={() => handleDelete(brand.id)}>
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