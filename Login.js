import React, { useState } from "react";

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [captcha,setCaptcha]=useState("");
const [userCaptcha,setUserCaptcha]=useState("");

const generateCaptcha = () => {
const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let cap="";
for(let i=0;i<5;i++){
cap+=chars.charAt(Math.floor(Math.random()*chars.length));
}
setCaptcha(cap);
};

const loginUser = async () => {

if(userCaptcha!==captcha){
alert("Captcha incorrect");
return;
}

const user={
email:email,
password:password
};

const res=await fetch("http://localhost:8080/api/users/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
});

if(res.ok){
alert("Login Successful");
window.location.href="/form";
}else{
alert("Invalid Login");
}

};

return(

<div className="container">
<div className="card">

<h2>Login Page</h2>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}/>

<br/><br/>

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}/>

<br/><br/>

<button onClick={generateCaptcha}>
Generate Captcha
</button>

<h3>{captcha}</h3>

<input placeholder="Enter Captcha"
onChange={(e)=>setUserCaptcha(e.target.value)}/>

<br/><br/>

<button onClick={loginUser}>
Login
</button>

</div>
</div>

);

}

export default Login;