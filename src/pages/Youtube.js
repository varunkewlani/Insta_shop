import React from 'react'
import "../assets/css/youtube.css"
// import Abc from '../assets/video/xyz.mkv'

export const Youtube = () => {
    return (
        <>
            <Video />

            <h2 className='fw-bold text-center my-5'> Watch my Videos</h2>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6 my-3'>
                        <iframe src="https://www.youtube.com/embed/QFaFIcGhPoM?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 shadow rounded-2' height="234"> </iframe>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 my-3'>
                        <iframe src="https://www.youtube.com/embed/Xe8CkYZvCig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 shadow rounded-2' height="234"> </iframe>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 my-3'>
                        <iframe src="https://www.youtube.com/embed/_Y3XRruIVXA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 shadow rounded-2' height="234"> </iframe>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 my-3'>
                        <iframe src="https://www.youtube.com/embed/QFaFIcGhPoM?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-100 shadow rounded-2' height="234"> </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}


const Video = () => {
    return (
        <div className='w-100'>
            <video src="" controls className='banner-resolustion'>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

