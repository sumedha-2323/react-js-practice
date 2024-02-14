import React, {useState, useEffect} from 'react';


const URL = "https://jsonplaceholder.typicode.com/users";

const Index = () => {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: ''});

   const fetchUsersData = async (apiURL)=>{
    setLoading(true);
    setIsError({status:false, msg:''});
      try {
        //  console.log("hello");
       const response = await fetch(apiURL);
       //  console.log('data',response);
       const data =await response.json();
       setUsersData(data);
     //   console.log(data);
     setLoading(false);
     setIsError({status:false, msg:''});

     if(response.status === 404) {    // it is used when the url is correct but given name is not correct- ex-if given user instead of users in the url
        throw new Error('data not found');
     }

      } catch (error) {
        console.log(error.message);
        setLoading(false);
        setIsError({status: true, msg: error.message || "something went wrong..please try again"});

      }
   }

   useEffect(()=>{
       fetchUsersData(URL);
   },[]);

   if (loading) {
    return( <div>
         <h3>Loading...</h3>
    </div>
    ) }

    if (isError && isError.status ) {
        return(
            <div>
                <h3 style= {{color: "red"}}>{isError?.msg}</h3>
            </div>
        )
    }

  return (
    <div>
      <h1>useEffect example-1</h1>
      <ul>
        {
            usersData.map((eachUser)=>{
                const {id, name, email} = eachUser;
                return (
                 <li key={id}>
                    <div>{name}</div>
                    <div>{email}</div>
                 </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Index;
