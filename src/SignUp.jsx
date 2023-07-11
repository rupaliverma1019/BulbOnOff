// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import React, { useState } from 'react'
// import { auth } from './Firebase'
// import './SignUp.css'



// const SignUp = () => {
//     const[email , setEmail] = useState("")
//     const [password , setPassword] = useState("")
//     const signUp = (e) =>{
//         e.preventDefault();
//         createUserWithEmailAndPassword(auth , email , password)
//         .then((userCredential) =>{
//             console.log(userCredential)
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }

//   return (
//     <div className='container'>
//         <form onSubmit={signUp} className='form'>
//         <input type='text' placeholder='username' value={email} onChange={(e) =>setEmail(e.target.value)}/>
//         <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
//         <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default SignUp;
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
        
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <p>If you are a new user</p>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;