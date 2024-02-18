import {useState, useEffect} from 'react';

const useFetch = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
     

    const makeAPICall = async () => {
        setLoading(true);
        setIsError(false);
        try {
            const response = await fetch(URL);
            const comingData = await response.json();
            setData(comingData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setIsError(true);
        }
       
    }


    useEffect(()=>{
        makeAPICall(URL);
    }, []);

    return [data, loading, isError];
}

export default useFetch;
