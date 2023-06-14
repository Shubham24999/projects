import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'role':
      return { ...state, role: action.payload };
    case 'status':
      return { ...state, maritalStatus: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }

};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [formData, dispatch] = useReducer(reducer, initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData,formData]);
    dispatch({ type: "reset" });
  };

  console.log(formData)
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" 
               name="name"
               value={formData.name}
               onChange={(e)=>dispatch({ type: 'name', payload: e.target.value })} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" 
                data-testid="gender-select"
                value={formData.gender}
                onChange={(e)=>dispatch({ type: 'gender', payload: e.target.value })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not-specified">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select"
              value={formData.role}
              onChange={(e)=>dispatch({ type: 'role', payload: e.target.value })}>
                <option value="frontend">FrontEnd Developer</option>
                <option value="backend">BackEnd Developer</option>
                <option value="fullstack">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus"
                 checked={formData.maritalStatus}
                 onChange={(e)=>dispatch({ type: 'status', payload: e.target.checked })}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* {submittedData.length!=0} */}

        {submittedData.length===0?(
        <h2 data-testid="no-user-container">no users found</h2>
        ):(submittedData.map((elm,id)=>{
          return <UserRow key={id} name={elm.name} gender={elm.gender} role={elm.role} maritalStatus={elm.maritalStatus} id={elm.id}/>
        }))}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
