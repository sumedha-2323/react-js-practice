import React, {useState, useCallback} from 'react';
import Button from './button';
import Title from './title';
import Count from './count';


const ParentCompo = () => {

  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(7000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
 
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  return (
    <>
      <Title/>
      <Count text={'age'} number={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count text={'salary'} number={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>

  

    </>
  )
}

export default ParentCompo;
