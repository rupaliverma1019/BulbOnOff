import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import AuthDetail from "./AuthDetail";
import SignUp from "./SignUp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  function handleClick(){
      navigate("/home")
  }

  return (
    <div className="container">
      <SignUp/>
      <div className="sign-in-container">
      
      <form onSubmit={signIn} >
        
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={handleClick}>Log In</button>
        <AuthDetail/>
      </form>
    </div>
    </div>

  );
};

export default Login;