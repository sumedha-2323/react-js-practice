import React, { useState } from 'react';

const Index = () => {
    // const tempList = [
    //     {
    //         text:"hello",
    //         id:"abc",
    //     },
    //     {
    //         text:"world",
    //         id:"xyz",
    //     }
    // ];

    // const [list, setList] = useState(tempList);
    const [list, setList] = useState();
    const [message, setMessage] = useState({
       text:"",
       id:"", 
    });

    const changeMessage=(e)=>{
        setMessage({
            ...message,
            text: e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let newTodo={
            text: message.text,
            id: new Date().getTime().toString(),
        }
        console.log(newTodo);
    }
  return (
    <div>
      <form>
        <input 
        type="text" 
        name="message" 
        id="message" 
        placeholder='enter some text'
        value={message.text}
        onChange={changeMessage} />
        <button type="submit" onClick={handleSubmit}>add</button>
      </form>
      <ul>
       {
        list.map((eachItem)=>{
            const {text, id} = eachItem;
            return(
                <li key={id}>
                    <span>{text}</span>
                    <button>edit</button>
                    <button>delete</button>
                </li>
            );
        })
       }
      </ul>
    </div>
  )
}

export default Index;
