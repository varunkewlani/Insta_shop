import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/admindashboard.css"

export const AdminDashboard = () => {
  
  return (
    <>
      <button className="navbar-toggler border w-100 p-2 mb-2 mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropside" aria-controls="navbarNavDropside" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropside">
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-white">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="small fw-bold p-2 primary-color">Product</span>
          </Link>
          <ul className="nav nav-pills flex-column mb-auto my-2">
            <li><Link to="/createcategory" className="nav-link my-1 text-dark fs-6 px-3 ms-1 admin-nav-items" aria-current="page">Category</Link></li>
            <li><Link to="/createbrand" className="nav-link my-1 text-dark fs-6 px-3 ms-1 admin-nav-items">Brand</Link></li>
            <li><Link to="/" className="nav-link my-1 text-dark fs-6 px-3 ms-1 admin-nav-items">Product</Link></li>
          </ul>

        </div>
      </div>

    </>
  )
}
