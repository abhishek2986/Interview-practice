import { useEffect, useState } from "react"
import { Navbar } from "./Navbar";
import './App.css'
export const ControlledForm=()=>{
    const [data,setData]=useState({
        name:"",
        email:"",
        course : ""
    })
   
    const [list,setList]=useState([]);
    function handleInputChange(e){
        const {name,value}=e.target
        setData({...data,[name]:value})
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(data.name=="" || data.email=="" ||data.course==""){
            alert("no form fields should be empty")
            
            return 
        }
        //write api to send data to backend 
        console.log(data);
        list.push(data);
        setData({
        name:"",
        email:"",
        course : ""
    })

    console.log(list)
    }

return (
    <>
            <Navbar/>
    <br/>
<div className="controlledcomponent">

    <h1>Controlled Registration Form : </h1>
    <br/>
    <form onSubmit={handleFormSubmit}>

    <label htmlFor="name">Enter the Name : </label>
    <input type='text' name='name' id='name' value={data.name} onChange={(e)=>handleInputChange(e)} />
    <br/>
    <br/>
        <label htmlFor="email">Enter the Email : </label>
    <input type='text' name='email' id='email' value={data.email} onChange={(e)=>handleInputChange(e)}/>
    <br/>
    <br/>
    <span >Select the course : </span><select name='course' onChange={(e)=>handleInputChange(e)}>
    <option value='course' id="course">select course </option>
        <option value='nestJs'>Nestjs</option>
        <option value='reactJs'>reactJs</option>
        <option value='javacript'>Javacript</option>
      </select>
    <br/>
    <br/>
<button type="submit">Submit Form </button>
    </form>
<br/>
    <h4>Display the form data : </h4>
    <br/>
    {list.map((curr)=>(
        
        <ul key={curr.email}>
        <li>Name : {curr.name}</li>
        <li>Email : {curr.email} </li>
        <li>Course : {curr.course}</li>
        <br/>
        </ul>
    ))}
    </div>
    </>
)
}