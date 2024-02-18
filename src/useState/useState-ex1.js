import React, { useState } from 'react';

const Index = () => {

    const [data, setData] = useState(false);

    const handleChange=()=>{
        setData(!data);
    }
  return (
    <div>
      <button onClick={handleChange} className='btn'>{data ? "hide" : "show" }</button>
      {
        data && ( <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Atque illum omnis esse animi soluta iure temporibus officiis 
        sit amet autem in nesciunt
         placeat voluptatem harum facilis, magni quae illo numquam.
      </div>)
      }
    </div>
  )
}

export default Index;
