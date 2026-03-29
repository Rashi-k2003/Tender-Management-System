import React, { useEffect, useState } from "react";

function Report(){

const [tenders,setTenders]=useState([]);
const [editing,setEditing]=useState(null);

const [company,setCompany]=useState("");
const [title,setTitle]=useState("");
const [amount,setAmount]=useState("");
const [deadline,setDeadline]=useState("");

useEffect(()=>{
fetch("http://localhost:8080/api/tenders/all")
.then(res=>res.json())
.then(data=>setTenders(data));
},[]);

const deleteTender = async(id)=>{
await fetch("http://localhost:8080/api/tenders/"+id,{
method:"DELETE"
});
window.location.reload();
};

const editTender=(t)=>{
setEditing(t.id);
setCompany(t.companyName);
setTitle(t.tenderTitle);
setAmount(t.amount);
setDeadline(t.deadline);
};

const updateTender = async(id)=>{

const tender={
companyName:company,
tenderTitle:title,
amount:amount,
deadline:deadline
};

await fetch("http://localhost:8080/api/tenders/update/"+id,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(tender)
});

alert("Tender Updated");

window.location.reload();

};

return(

<div>

<h2>Tender Report</h2>

<button onClick={()=>{
window.open("http://localhost:8080/api/tenders/export")
}}>
Export to Excel
</button>

<br/><br/>

<table border="1">

<tr>
<th>ID</th>
<th>Company</th>
<th>Title</th>
<th>Amount</th>
<th>Deadline</th>
<th>Action</th>
</tr>

{tenders.map(t=>(
<tr key={t.id}>

<td>{t.id}</td>

<td>
{editing===t.id ?
<input value={company} onChange={(e)=>setCompany(e.target.value)}/>
:
t.companyName}
</td>

<td>
{editing===t.id ?
<input value={title} onChange={(e)=>setTitle(e.target.value)}/>
:
t.tenderTitle}
</td>

<td>
{editing===t.id ?
<input value={amount} onChange={(e)=>setAmount(e.target.value)}/>
:
t.amount}
</td>

<td>
{editing===t.id ?
<input value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
:
t.deadline}
</td>

<td>

{editing===t.id ?
<button onClick={()=>updateTender(t.id)}>Save</button>
:
<button onClick={()=>editTender(t)}>Edit</button>
}

<button onClick={()=>deleteTender(t.id)}>Delete</button>

</td>

</tr>
))}

</table>

</div>

);

}

export default Report;