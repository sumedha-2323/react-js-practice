import React, {useState, useMemo,useEffect} from 'react';

const Final = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // const doubleNumber = slowFunction(number)
    const doubleNumber = useMemo(()=> {
        return slowFunction(number);
    }, [number])

    // const themeChange = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black',
    // }

    const themeChange = useMemo(()=> {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark]) 

    // even if we not click on 'change theme', due to this useEffect it will render everytime
    // so we use useMemo to themeChange object
    useEffect(() => {
      console.log('theme Changed');
    }, [themeChange])

  return (
    <>
      <input type="number" name="number" id="number" 
      value={number}
      onChange={(e) => setNumber(Number(e.target.value))} /> <br/>
      <button onClick={() => setDark(!dark)}>Change theme</button>
      <h2 style={themeChange}>the number: {doubleNumber}</h2>
    </>
  )
};


// this slowFunction is used to slow the application ...
// due to this, the performance of every element in the app (not only the 'number' but also the 'change theme') becomes slow...
const slowFunction = (number) => {
                                                
    for (let index = 0; index < 1000000000; index++) {
        
    }
    return number * 2;
} 

export default Final;
