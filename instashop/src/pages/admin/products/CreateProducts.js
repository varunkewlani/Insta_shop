import React, { useState } from 'react'
import { createProduct } from '../../../apis/product';

export const CreateProducts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

    const handleSubmit = () => {
        const data = {
            title: title,
            description: description,
            size:selectedSize
        }
        createProduct(data).then((res) => {
            console.log(res.data);
        }).catch((e) => {
            console.log("Product Create Error", e);
        })
    }


    return (
        <div>
            <h2 className="checkout-heading my-5">Products</h2>

            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="title" className="fs-6 px-1 my-1">Title </label>
                    <input type="text" className="w-100 py-2 border rounded-0" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="px-1 my-1">
                        Description
                    </label>
                    <textarea className="w-100 py-2 border rounded-0" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>

                <div className='mb-3'>
                    <label htmlFor="size" className='px-1 my-1'>Size:</label>
                    <select id="size" className='w-100 py-2 border rounded-0' value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} required>
                        <option value="" className='w-100 py-2 border rounded-0'>Select Size</option>
                        {sizeOptions.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                <button className='btn btn-outline-dark' onClick={handleSubmit}>Create Product</button>
            </div>

        </div>
    )
}
