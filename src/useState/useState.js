import React, { useState } from "react";

const Index = () => {
    // console.log(useState(10));
    const [count, setCount] = useState(0);
    console.log(count);
    console.log(setCount);

    const incrementCount=()=>{
        setCount(count+1);
        setCount(count+1);
    }

    const decrementCount=()=>{
        setCount(count-1);
    }
   return(
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
   )
}
export default Index;