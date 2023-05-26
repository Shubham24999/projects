import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  // console.log(state)
  switch(action.type){
    case "email":{
      return {...state,email:action.payload}
    }
    case "password":{
      return {...state,password:action.payload}
    }
    case "reset":{
      return initialState
    }
    default:{
      console.log("default case");
    }
  }
};
// console.log(initialState)
function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});

  const [state,dispatch]=useReducer(reducer,initialState)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmittedData({...submittedData,state})
    // [state]=initialState
  }
  // console.log(submittedData)
  console.log(state)
  return (<>
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper">
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input type="email" data-testid="user-email" onChange={(e)=>dispatch({type:"email",payload:e.target.value})} />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password" onChange={(e)=>dispatch({type:"password",payload:e.target.value})}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

      {submittedData.state ? submittedData.map((elm)=>{
     return  <div>
        <div data-testid="submitted-data-email">User Email:{elm.email}</div>
        <div data-testid="submitted-data-password">User Password:{elm.password}</div>
      </div>}):
      <div data-testid="no-details-container">no details found</div>}
    </div>
    </>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
