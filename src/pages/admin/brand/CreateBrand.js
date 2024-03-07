import React, { useEffect, useState } from 'react'
import { AdminDashboard } from '../../AdminDashboard'
// import { createCategory, getCategory } from '../../../apis/category';
import { Link } from 'react-router-dom';

export const CreateBrand = () => {

    const [brand, setBrand] = useState('');
    const [brands, setBrands] = useState()


    // list 
    // useEffect(() => {
    //     getBrand().then((res) => {
    //         console.log(res.data);
    //         setBrands(res.data)
    //     }).catch((e) => {
    //         console.log(e);
    //     })
    // }, [])

    // create
    const handleSubmit = (e) => {
        // e.preventDefault();
        // const data = {
        //     name: brand
        // }

        // createBrand(data).then((res) => {
        //     console.log(res.data, "kkkkkk");
        // }).catch((e) => {
        //     console.log(e);
        // })
    }

    // delete
    const handleDelete = (data) => {
        console.log(data);
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
                                <div className='fs-4 fw-bold'>Create Brand</div>
                            </div>

                            <div className='row'>
                                <div className='col-md-5 mx-auto'>
                                    <div className="d-flex justify-content-center my-5">
                                        <input type="text" className="border border-secondary border-opacity-25 px-2 w-100 mx-auto input-field" onChange={(e) => setBrand(e.target.value)} placeholder="Enter your Brand" />
                                        <button className='btn btn-outline-dark rounded-0 ms-4' onClick={handleSubmit}>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='container mt-3'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        brands && brands.map((c, index) => {
                                            return (
                                                <tr>
                                                    <th>{index}</th>
                                                    <td>{c.name}</td>
                                                    <td>
                                                        <Link to={`/updateCategory/${c.id}`}><i className="fa-solid fa-pen-to-square text-success me-3" ></i></Link>
                                                        <span onClick={() => handleDelete(c.slug)}><i className="fa-solid fa-trash text-danger" ></i></span>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
