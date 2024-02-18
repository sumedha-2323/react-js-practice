import React, {useEffect, useState, useRef} from 'react';

const Final = () => {

    const [firstName, setFirstName] = useState('');
    const inputDOM= useRef('');

    useEffect(()=>{
       console.log(inputDOM);
    })
    
    const focus = () =>{
       inputDOM.current.focus();
    }

  return (
    <>
       <input ref={inputDOM}
        type="text" name="firstName" id="firstName" onChange={(e)=> setFirstName(e.target.value)} />
       <h5>Typing: {firstName}</h5>
       <button onClick={focus}>focus</button>
    </>
  )
}

export default Final;
