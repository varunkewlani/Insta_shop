import React from 'react'
import { Link } from 'react-router-dom'

export const Delivered = () => {
    return (
        <>
            <div className='container' style={{ height: "65vh" }}>

                <div className='text-center p-5 fs-3'>
                    <i className="fa-solid fa-check border border-success p-3 rounded-5 text-success"></i> </div>
                <div className='text-center fs-5 fw-bold'> Your Order Has Been Placed! </div>
                <div className='text-secondary m-3' style={{ textAlign: 'justify' }}>
                    "Lorem45" doesn't seem like a complete prompt or specific question. Can you please provide more context or explain what you'd like me to do with "Lorem45"?
                </div>
                <div className='d-flex justify-content-center py-3'>
                    <Link to="/" className='btn btn-dark w-auto mx-0'> Back to Shopping</Link>
                </div>

            </div>
        </>
    )
}
