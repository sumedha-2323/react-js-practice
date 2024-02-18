import React, {useEffect, useState} from 'react';

const Index = () => {

    const [count, setCount]  = useState(0);

    useEffect(()=>{
        console.log('hello im from useEffect');
    }, []) ;


  return (
    <div>
      <h1>hello</h1>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>
    </div>
  )
}

export default Index;
