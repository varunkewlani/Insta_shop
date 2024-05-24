import React, { useEffect, useState } from 'react'
import { getBrand, updateBrand, updateCategory } from '../../../apis/brand';
import { AdminDashboard } from '../../AdminDashboard';
import { useParams, useNavigate } from 'react-router-dom';

export const UpdateBrand = () => {
    const [brand, setBrand] = useState();
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getBrand(params.slug).then((res) => {
            res.data.map((c) => {
                if (params.slug == c.id) {
                    setBrand(c.name)
                }
            })
        })
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        const data = {
            name: brand
        }

        updateBrand(params, data).then((res) => {
            navigate("/createBrand")
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'>
                        <AdminDashboard />
                    </div>

                    <div className='col-md mt-5'>
                        <div className='container'>
                            <div className='d-flex justify-content-between'>
                                <div className='fs-4 fw-bold'>Update Brand</div>
                            </div>

                            <div className='row'>
                                <div className='col-md-5 mx-auto'>
                                    <div className="d-flex justify-content-center my-5">
                                        <input type="text" className="border border-secondary border-opacity-25 px-2 w-100 mx-auto input-field" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter your Brand" />
                                        <button className='btn btn-outline-dark rounded-0 ms-4' onClick={handleUpdate}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
