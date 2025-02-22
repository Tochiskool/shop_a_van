import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [logInfo, setLogInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInfo); //console log every data in the logInfo varaible
    setLogInfo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='login-container'>
          <h1>Sign in to your account:</h1>
          <form onSubmit={handleSubmit}>
            <input
              name='name'
              onChange={handleChange}
              type='text'
              placeholder='Full Name...'
              value={logInfo.name}
            />
            <input
              name='email'
              onChange={handleChange}
              type='email'
              placeholder='Email address...'
              value={logInfo.email}
            />
            <input
              name='password'
              onChange={handleChange}
              type='password'
              placeholder='Enter your password...'
              value={logInfo.password}
            />
            <button type='submit' className='btn-primary-type col-12'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
