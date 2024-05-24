import React, { useEffect, useState } from 'react'
import { getCategory, updateCategory } from '../../../apis/category';
import { AdminDashboard } from '../../AdminDashboard';
import { useParams } from 'react-router-dom';

export const UpdateCategory = () => {
    const [category, setCategory] = useState();
    const params = useParams()

    useEffect(() => {
        getCategory(params.slug).then((res) => {
            res.data.map((c)=>{
                if(params.slug == c.id){
                  setCategory(c.name)
                }
            })
        })
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            name: category
        }

        updateCategory(params,data).then((res) => {
            console.log(res.data,"success");
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
                                <div className='fs-4 fw-bold'>Update Category</div>
                            </div>

                            <div className='row'>
                                <div className='col-md-5 mx-auto'>
                                    <div className="d-flex justify-content-center my-5">
                                        <input type="text" className="border border-secondary border-opacity-25 px-2 w-100 mx-auto input-field" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter your Category" />

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
