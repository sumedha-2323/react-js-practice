import React, {useState, useEffect} from 'react'
import useFetch from './useFetch';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const SecondApi = () => {

     const [postData, loading,isError ] = useFetch(URL);

    if(loading) {
        return <h3>Loading...</h3>
    }

    if (isError) {
        return <h3>something is wrong...</h3>
    }

return (
    <div>
        <h1>Posts</h1>
        {/* <h5>{JSON.stringify(userData)} </h5> */}
        <ul>{postData.map((eachUser) =>{
            return (
                <li key={eachUser.id}>{eachUser.title}</li>
            )
        })}</ul>
    </div>
  )
}

export default SecondApi;
