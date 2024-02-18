import React, {useContext} from 'react';
import { UserContext } from './context/usercontext';


const SubChildComponent = ({usersDetails}) =>{

    const data = useContext({useContext});
    console.log(data);

    
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
};
export default SubChildComponent;
