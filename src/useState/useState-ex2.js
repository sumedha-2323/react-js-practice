import React, {useState} from 'react';

const Index = () => {

    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    // const changeFirstName=(e)=>{
    //     console.log(e.target.value);
    //     setFirstName(e.target.value);
    // }

    // const changeEmail=(e)=>{
    //     console.log(e.target.value);
    //     setEmail(e.target.value);

    // }

    // const changePassword=(e)=>{
    //     console.log(e.target.value);
    //     setPassword(e.target.value);

    // }

    const handleInputChange=(e, name)=>{
        console.log(e.target.value, name);
        if (name === "firstName") {
            setFirstName(e.target.value);
        }
        else if (name === "email") {
            setEmail(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let userObj = {
            firstName: firstName,
            email: email,
            password: password,
        }
        console.log(userObj);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input 
        type="text" 
        name="firstname" 
        id="firstname" 
        value={firstName}
        placeholder='enter your name'
        // onChange={changeFirstName} 
        onChange={(e)=>{handleInputChange(e, "firstName")}} />
        </div>

        <div>
        <input 
        type="email" 
        name="email" 
        id="email" 
        value={email}
        placeholder='enter your email'
        // onChange={changeEmail} />
        onChange={(e)=>{handleInputChange(e, "email")}}/>
        </div>

        <div>
        <input 
        type="password" 
        name="password" 
        id="password" 
        value={password}
        placeholder='enter your password'
        // onChange={changePassword} />
        onChange={(e)=>{handleInputChange(e, "password")}}/>
        </div>
       
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Index;

// 1st, connecting the input fields and useState() by using a value in the input fields
// then, creating a function to change the input values....
