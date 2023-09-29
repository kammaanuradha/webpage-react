import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; // Make sure axios is installed and imported
import { Header } from "./components/Header";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const navigate=useNavigate('');
  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    skill: "",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [notify,setNotify]= useState(false);

  const submitHandler = e => {
    e.preventDefault();
    console.log('data', data);

  

    
    
    // Send a POST request to the specified API endpoint
    axios.post('http://3.110.154.127:5000/api/v1/auth/register', data, { withCredentials: true })
      .then((res) => {
        console.log('Response:', res.data);
        setNotify(true);
        toast.success("Register Successfully",{
          position:'top-right',
          duration:3000
        })
        // Assuming the response contains useful data
        // You can also consider redirecting the user to a success page after successful registration.
      })
      .catch((error) => {
        console.error('Error:', error);
        setNotify(false)
        toast.error("Register not Successful",{
          position:'top-right',
          duration:3000
        })
        
        // Handle the error here, such as displaying a meaningful error message to the user.
      });
  }
  useEffect(()=>{
    if(notify === true){
      // alert('Register Successfully');
      navigate('/')
    }
    // else if(notify === false)
    // {
    //   alert('Register not Successful');
    // }
  },[notify])

 

  return (
    <div>
      <Header />
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead text-primary">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={submitHandler} autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="fullname"
              value={data.fullname}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={data.mobile}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Skill"
              name="skill"
              value={data.skill}
              onChange={changeHandler}
            />
            <small className="form-text">
              Please provide skills separated by a comma <b>( , )</b>
            </small>
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={changeHandler}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1 text-primary">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Sign In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
