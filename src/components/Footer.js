import React from 'react'
import "../assets/css/footer.css"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="py-5 footer-bg">
                <div className="container">
                    <div className="row justify-content-center mx-0">
                        <div className="col-md-4">
                            <h5 className="mb-3 h3 p-2 pb-0 fw-bold" style={{color:"brown"}}>Insta Shop</h5>
                            <p className='small text-dark mx-2'>We're the world's leading provider of Minion-related products and services.</p>
                        </div>
                        <div className="col-md-2">
                            <div className="fw-bold my-3 mx-2 fs-5">Social Media</div>
                            <ul className="list-unstyled mx-2">
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">About Us</Link></li>
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">Contact Us</Link></li>
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">FAQ</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <div className="fw-bold my-3 ms-2  fs-5">Orders & Returns </div>
                            <ul className="list-unstyled ms-2">
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">Help & Advice</Link></li>
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">Shipping </Link></li>
                                <li><Link className='text-decoration-none text-dark fs-6' to="/">Term $ Conditions</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <div className="my-3 fs-5 mx-2 fw-bold">Newsletter</div>
                            <p className='small mx-2'>Subscribe to our newsletter to receive updates on new products, promotions, and more.</p>
                        </div>
                    </div>

                    {/* mini footer */}

                </div>
            </footer>
            <div className="row pt-4 bg-dark text-white mx-0">
                <div className="col-12 text-center">
                    <p className="small copyright">&copy; 2024 Storecart Store(Varun Kewlani). All rights reserved.</p>
                </div>
            </div>

        </>
    )
}
