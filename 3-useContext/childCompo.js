import SubChildComponent from "./subchildCompo";



const ChildComponent = (props) =>{
    // console.log(props.usersDetails);
    return(
        <div>
            <h2>Child Component</h2>
            <SubChildComponent usersDetails={props.usersDetails}/>
        </div>
    )
};
export default ChildComponent;