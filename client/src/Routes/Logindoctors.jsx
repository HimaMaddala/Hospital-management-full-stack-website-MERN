import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {
        console.log(res);
        if (res.data.Login) {
          const match_doctor_id = res.data.doctor_id;
          if (match_doctor_id) {
            navigate(`/doctor_dashboard/${match_doctor_id}`);
          } else {
            navigate("/");
          }
        } else {
          alert("Invalid credentials");
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
        alert("An error occurred during login");
      });
  };

  return (
    <>
    <Header/>
    <div className="d-flex justify-content-center align-items-center bg-light vh-100" style={{height:'500px'}}>
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn w-100">
            Login
          </button>
        </form>
        <p>Don't Have an Account?</p>
        <button className="btn w-100">
          Register
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
