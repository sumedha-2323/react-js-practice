import React from "react";

const Title = () => {
    console.log('title render');
    return <h1>useCallback demo and react.memo</h1>
  }

  export default React.memo(Title);