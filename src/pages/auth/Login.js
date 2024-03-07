import React, { useState } from 'react';
import "../../assets/css/login.css";
import { Link } from 'react-router-dom';
import { checkUser } from '../../apis/auth';
import { useCookies } from 'react-cookie';


export const Login = () => {

  const originalSet = new Set([1, 2, 3, 4, 5, 1])

    console.log(originalSet,"yyyyyyyyyyyyy")
  


  const [cookie,setCookie] = useCookies(["user"])
  const [email, setEmail] = useState('parth@gmail.com');
  const [password, setPassword] = useState('Marvelji@1');
  const [errorMessage, setErrorMessage] = useState('');


  const HandleClick = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');

    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage('Password must contain at least one lowercase letter');
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage('Password must contain at least one number');
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setErrorMessage('Password must contain at least one special character');
      return;
    }

    if ( !email || !password) {
      setErrorMessage('Please Fill All Fields');
    } else {

      const data = {
        email: email,
        password: password
      }

      console.log(data);

      checkUser(data).then((res) => {
        console.log(res,"LLLLLLL");
        if(res.data.status===400){
          console.log(res.data,"error");
        }else{
          console.log(res.data,"34534345345");
          setCookie("user", res.data, { path: "/" });
          // setCookie("user",res.data)
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  };



  return (
    <React.Fragment>
      <div className="container pb-5">
        <div className="row justify-content-center my-5 py-5">
          <div className="col-md-4">
            <div className="login-form">
              {/* Heading */}
              <div className="h3 fw-bold">Sign In</div>
              <div className="line mt-3"></div>
              <div className="text-secondary small m-1 mb-2">
                Start Your Journey Begins
              </div>

              {/* Form */}


              <div>

              {errorMessage && (
                  <div className="text-danger border btn w-100 text-start rounded-0 px-3 py-2 mt-2" role="alert">
                    <span className='small'> {errorMessage}</span>
                  </div>
                )}



                <input
                  type="email"
                  className="input-field my-3"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}

                />

                <button
                  type="submit"
                  className="btn btn-dark rounded-0 mt-3 mb-2"
                  onClick={HandleClick}
                >
                  Sign In
                </button>
              </div>

              <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>.
              </p>

              <p className="forgot-password-link">
                <Link to="/forgot-password">Forgot password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};




// number File
// 4 number
// num not found
// account privacy 
// 