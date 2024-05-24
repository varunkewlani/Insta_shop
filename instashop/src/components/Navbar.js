import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../assets/css/navbar.css"

const Navbar = () => {

    const handlesignout = () => {
        console.log("token");
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow navanime">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand brandtag mx-3"> Insta Shop  </Link>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto my-2">
                            <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/shop" aria-current="page">Shop</NavLink>
                            </li>
                            <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/categories" aria-current="page">Categories</NavLink>
                            </li>
                            <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/cart" aria-current="page">Cart</NavLink>
                            </li>
                            {/* <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/checkout" aria-current="page">Checkout</NavLink>
                            </li> */}
                            {/* <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/youtube" aria-current="page">Youtube</NavLink>
                            </li> */}
                           
                            <li className="nav-item mx-auto my-1 px-3">
                                <NavLink className="text-dark text-decoration-none" to="/login" aria-current="page">Login</NavLink>
                            </li>


                            {/* <li className="nav-item mx-auto px-3 mb-1">
                                <button onClick={handlesignout} className="nav-link" aria-current="page">Signout</button>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>    </div>
    )
}
export default Navbar

