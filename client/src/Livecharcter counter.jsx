import { useState } from "react"

export const LiveCharacterCounter=()=>{
    const [data,setData]=useState()
const[count,setCount]=useState(0);
const [color,setcolor]=useState("blue")
function handleInputChange(){
    if(count>100){
        setcolor("red")
    }
setCount((prev)=>prev+1);
}
return (
    <>
    <h1>Live LiveCharacterCounter : </h1>
    <h3>Live Character Count : <span style={{color : color }}>{count}</span></h3>
    <label htmlFor="bio" >Enter the charcter : </label>
    <input type='text' name='bio' id='bio' value={data} onChange={handleInputChange}></input>
    </>
)
}