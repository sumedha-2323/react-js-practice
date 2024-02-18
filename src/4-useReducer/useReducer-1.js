import React, {useReducer} from 'react';

const reducer = (state, action) =>{
    // console.log(state);
    // console.log(action);
    if(action.type === "DELETE_PERSON") {
      const newPersons = state.data.filter((eachPerson)=>{
        return eachPerson.id !== action.payload;
      });
      return {
        ...state,
        data: newPersons,
        length: state.length-1,

      }
    }
    throw new Error('Action not found');
};

const Final = () => {

  const initialState = {
      data: [
        {id:'abc',firstName:"sumedha", email:"sumedhajammula@gmail.com"},
        {id:'xyz',firstName:"rakesh", email:"rakeshjammula@gmail.com"},
        ],
        length: 2,
  }

//   useReducer(reducer, initialState);
//  console.log( useReducer(reducer, initialState));

const [state, dispatch] = useReducer(reducer, initialState);

const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: 'DELETE_PERSON',
      payload: id,
    });
}

const handleEdit=(id)=>{
  dispatch({
    type: 'UPDATE_PERSON',
    payload: id,
  })
}

  return (
    <div>
      <h1>useReducer Hook </h1>
      <h1>Curent Users length: {state.length}</h1>
      {
        state.data.map((eachItem)=>{
          const {id, firstName, email} = eachItem;
          return (
            <div key={id}>
  
              <h3>{firstName}</h3>
              <p>{email}</p>
              <button onClick={()=> handleDelete(id)}>delete</button>
              <button onClick={()=> handleEdit(id)}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Final;
