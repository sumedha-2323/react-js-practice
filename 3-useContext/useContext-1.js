import React, {useState} from 'react';

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
}

const ChildComponent = (props) =>{
    // console.log(props.usersDetails);
    return(
        <div>
            <h2>Child Component</h2>
            <SubChildComponent usersDetails={props.usersDetails}/>
        </div>
    )
}
const SubChildComponent = ({usersDetails}) =>{
    return(
        <div>
            <h3>Sub-Child Component</h3>
            <div>
                firstname : {usersDetails.firstName};
            </div>
            <div>
                lastname : {usersDetails.lastName};
            </div>
            <div>
                email : {usersDetails.email};
            </div>
        </div>
    )
}

export default ParentComponent;
