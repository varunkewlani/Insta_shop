import React, { useEffect, useState } from 'react';
import "../../assets/css/login.css";
import { Link } from 'react-router-dom';
import { userList } from '../../apis/auth';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [cookie, setCookie] = useCookies(["user"])
  const [email, setEmail] = useState('parth@gmail.com');
  const [password, setPassword] = useState('Marvelji@1');
  const [errorMessage, setErrorMessage] = useState('');
  const [msg, setMsg] = useState('');
  const [users, setUsers] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    userList().then((res) => setUsers(res.data)).catch((err) => console.log(err))
  }, [])

  const HandleClick = async (e) => {
    e.preventDefault();
    setMsg('')
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

    if (!email || !password) {
      setErrorMessage('Please Fill All Fields');
    } else {

      const data = {
        email: email,
        password: password
      }

      let userFound = false;

      if (!userFound) {
        setMsg('');
        setErrorMessage('Invalid Email');
      }
      users.forEach((user) => {
        if (user.email === data.email) {
          userFound = true;
          if (user.password === data.password) {
            setMsg('Sign In Successfully');
            setErrorMessage('');
            sessionStorage.setItem('token', user.email);
            setTimeout(() => {
              navigate("/admindashboard")
              setMsg('')
            }, 2000);
          } else {
            setMsg('');
            setErrorMessage('Incorrect Password');
          }
        }
      });

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

                {msg && (
                  <div className="text-success border btn w-100 text-start rounded-0 px-3 py-2 mt-2" role="alert">
                    <span className='small'> {msg}</span>
                  </div>
                )}

                <input type="email" className="input-field my-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="input-field" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn btn-dark rounded-0 mt-3 mb-2" onClick={HandleClick} > Sign In </button>

              </div>

              <div className='mt-2'>
                <Link to="/register" className="register-link text-decoration-none">
                  Don't have an account? <span className='fw-normal text-decoration-underline'> Register here</span>.
                </Link>
              </div>

              <div className="register-link">
                <Link to="/forgot-password" className='forgot-password-link'>Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};