import React, {useState} from 'react'

const Index = () => {
    const initialArray =[
        {
            id:"abc",
            firstName:"emma",
            lastName:"watson",
            age:20,
        },
        { 
            id:"xyz",
            firstName:"sumedha",
            lastName:"jammula",
            age:20,
        },
    ]

    const [data, setData] = useState(initialArray);
    
    const handleDelete=(comingId)=>{
        // console.log(comingId);
        const filterData = data.filter((eachItem)=>{
            return eachItem.id !== comingId;
        })
        // console.log(filterData);
        setData(filterData);
    }
  return (
    <div>
      <ul>
        {
            data.map((eachItem, index)=>{
                const {firstName, lastName, age, id} = eachItem;
                return(
                    <li key={index}>
                        <div>First name: {firstName}</div>
                        <div>Last name: {lastName}</div>
                        <div>Age: {age}</div>
                        <button onClick={()=>handleDelete(id)}>delete me</button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Index;
