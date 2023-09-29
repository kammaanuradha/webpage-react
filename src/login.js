import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [auth, setAuth] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate('');

  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('data', data);
    axios
      .post('http://localhost:5000/api/v1/auth/login', data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log('test', res?.data);
        // Set loginSuccess to true on successful login
        setLoginSuccess(true);
        toast.success("Register Successfully",{
          position:'top-right',
          duration:3000
        })
        // Ass
        // Optionally, you can also set a timer to reset loginSuccess after a few seconds
        // setTimeout(() => setLoginSuccess(false), 3000); // Reset loginSuccess after 3 seconds
      })
      .catch((err) => {
        console.log('error',err);
        setLoginSuccess(false);
        toast.success("Register Successfully",{
          position:'top-right',
          duration:3000
        })
        // Ass
      })
  }



  // if (auth) {
  //   return <Navigate to="/dashboard" replace={true} />;
  // }
  useEffect(() => {
    if (loginSuccess === true) {
      // alert("Login Successfully");
      navigate('/home');
    }
    // else if (loginSuccess === false) {
    //   alert("Login Failed");
    // }
  }, [loginSuccess])

  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead text-primary">
          <i className="fas fa-user"></i> Sign Into Your Account
        </p>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-l text-primary">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary">
            Signup
          </Link>
        </p>
        {/* {loginSuccess && (
          <div className="alert alert-success" style={{color:"green"}}>Login successful!</div>
        )} */}
      </section>
    </div>
  );
};

export default Login;
