import React, {useState} from 'react'

const Index = () => {
    
    const initialObj = {
        firstName:"emma",
        lastName:"watson", 
    }

    const [data,setData] = useState(initialObj);

    const changeFirstName=()=>{
        setData({
            ...data, // copying all values from the object
            firstName:"sumedha", // changing the firstName

        })
    }

    const changeLastName=()=>{
        setData({
            ...data,
            lastName:"jammula",
        })
    }
  return (
    <div>
      <h1>My name is {data.firstName}</h1>
      <button onClick={changeFirstName}>change firstName</button>
      <h1>My name is {data.lastName}</h1>
      <button onClick={changeLastName}>change lastName</button>
    </div>
  )
}

export default Index;
