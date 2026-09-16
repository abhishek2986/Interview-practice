import { useState } from "react";

export const Counter=()=>{
    const [count,setCount]=useState(0);
    function handleIncrement(){
        setCount((prev)=>prev+1)
    }
    function handleDecrement(){
     if(count<1){
        return 
     }
        setCount((prev)=>prev-1)
    }

    function handleReset(){
        setCount((prev)=>prev=0)
    }
    return (
        <>
<h1>Counter Application</h1>
<h3>The current count is : {count}</h3>
<span>Increment count : </span><button onClick={handleIncrement}>Increment</button>
<br/>
<br/>
<span>Decrement count : </span><button onClick={handleDecrement}>Decrement</button>
<br/>
<br/>
<span>Reset count : </span><button onClick={handleReset}>Reset</button>
        </>
    )
}