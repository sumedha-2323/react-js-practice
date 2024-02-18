import React, {useState, useEffect} from 'react';
import usePageTitle from './usePageTitle';

const PageTitleTwo = () => {

    const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     document.title = `count - ${count}`;
    // }, [count]);

    usePageTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count - {count}</button>
    </div>
  )
}

export default PageTitleTwo;
