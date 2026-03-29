import React, { useState } from "react";

function Register() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const registerUser = async () => {

    const user = {
      name:name,
      email:email,
      password:password
    };

    await fetch("http://localhost:8080/api/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    });

    alert("User Registered Successfully");

  };

  return (
  <div className="container">
    <div className="card">

      <h2>Registration Page</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <br/><br/>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <br/><br/>

      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <br/><br/>

      <button onClick={registerUser}>Register</button>

    </div>
  </div>
);
}

export default Register;