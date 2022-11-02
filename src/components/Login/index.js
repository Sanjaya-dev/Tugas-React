// import logo from '../../logo.svg';
// import '../../App.css';
import *as React from 'react';
import {useState,useEffect} from 'react';
import '../../App.css';


async function doLogin({ email, password }) {
  // endpoint
  const response = await fetch("http://localhost:3001/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  console.log(email,password,token);



  return (
    <div className='container form_login'>
      <h4>LOGIN</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={(e)=>setPasword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
