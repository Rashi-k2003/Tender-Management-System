import React, {useState} from "react";

function TenderForm(){

const [company,setCompany]=useState("");
const [title,setTitle]=useState("");
const [amount,setAmount]=useState("");
const [deadline,setDeadline]=useState("");

const submitTender = async ()=>{

const tender={
companyName:company,
tenderTitle:title,
amount:amount,
deadline:deadline
};

await fetch("http://localhost:8080/api/tenders/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(tender)
});

alert("Tender Submitted Successfully");

};

return(

<div className="container">
<div className="card">

<h2>Tender Form</h2>

<input placeholder="Company Name" onChange={(e)=>setCompany(e.target.value)} />
<br/><br/>

<input placeholder="Tender Title" onChange={(e)=>setTitle(e.target.value)} />
<br/><br/>

<input placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} />
<br/><br/>

<input type="date" onChange={(e)=>setDeadline(e.target.value)} />
<br/><br/>

<button onClick={submitTender}>Submit Tender</button>

</div>
</div>

);

}

export default TenderForm;