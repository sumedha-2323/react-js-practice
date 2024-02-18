import React, {useEffect, useState} from 'react';

const Index = () => {

    const [count, setCount] = useState(0);
    // const [toggle, setToggle] = useState(true);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const resizeHandle= ()=>{
            setPageWidth(window.innerWidth); 
        };
            window.addEventListener('resize', resizeHandle);
        console.log("hello, i am from useEffect", count);

        return () =>{
            console.log("i am removing the event");
              window.removeEventListener('resize', resizeHandle);
        }
    }, [count]);

  return (
    <div>
        {/* <h1 onClick={()=>{
            setToggle(!toggle);}}>{toggle ? "open" : "close"}</h1> */}
      <h3>{pageWidth}</h3>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>
    </div>
  )
}

export default Index;
