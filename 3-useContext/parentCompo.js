import React, {useState} from 'react';
import ChildComponent from './childCompo';

const ParentComponent = () => {
    const [usersDetails, setUsersDetails] = useState({
        firstName:"emma",
        lastName: "watson",
        email: 'email@gmail.com',
    })
  return (
    <div>
      <h1>useContext - parent Component</h1>
      <ChildComponent usersDetails={usersDetails}/>
    </div>
  )
};

export default ParentComponent;