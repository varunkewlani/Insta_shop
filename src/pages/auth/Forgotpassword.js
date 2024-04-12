import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Forgotpassword = () => {

  const [email, setEmail] = useState('');



  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className="row justify-content-center my-5 py-5">
          <div className="col-md-4 mt-5">
            <div className="login-form">
              {/* Heading */}
              <div className="h3 fw-bold">Forgot Password</div>
              <div className="line mt-3"></div>
              <div className="text-secondary small m-1 mb-2">
                Type Your Email For Restore Password:
              </div>

              {/* Form */}
              <div className='mt-3'>
                <input
                  type="email"
                  className="input-field mt-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-dark rounded-0 mt-3 mb-2"
                >
                  Send OTP
                </button>
              </div>

              <div className='mt-2'>
                <Link to="/register" className="register-link text-decoration-none">
                  Remeber Your Password ?<span className='fw-normal text-decoration-underline'> Sign in here</span>.
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
