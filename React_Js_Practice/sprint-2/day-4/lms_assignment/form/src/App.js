
import './App.css';
import Show from "./components/Show"
import { useState } from "react";

const initState = {
  username: "",
  userage: "",
  useraddress:"",
  department:"",
  salary:"",
  isMarried: false,
  imgurl:""
};

export default function App() {
  const [formState, setFormState] = useState(initState);
  const [data,setData]=useState([])

  const handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({ ...formState, [e.target.name]: val });
    
  };
  console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    setData([...data,formState])
    setFormState(initState)

  };

  const { username, userage, useraddress,department,salary,isMarried,imgurl } = formState;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          {""}
          UserName :
          <input name="username" placeholder='Enter Your Name' value={username} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          {""}
          UserAge :
          <input name="userage" placeholder='Enter Your Age' value={userage} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          {""}
          UserAddress :
          <input name="useraddress" placeholder='Enter Your Address' value={useraddress} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Department:
          <select name="department" value={department} onChange={handleChange}>
            <option value="Software">Software</option>
            <option value="Haedware">Hardware</option>
            <option value="IOT">IOT</option>{" "}
          </select>
        </label>
        <br />
        <br />
        <label>
          {""}
          Salary :
          <input name="salary" placeholder='Enter Your Salary' value={salary} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Marital Status :
          <input
            name="isMarried"
            type="checkbox"
            checked={isMarried}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          {""}
          ImageURL :
          <input name="imgurl" placeholder='Enter Your ImageURL' value={imgurl} onChange={handleChange} />
        </label>
        <br />
        <br />
       
        <input type="submit" />
      </form>

      {data && data.map((elm)=>{
        return <Show key={elm.imgurl} {...elm} />
      })}
    </div>
  );
}


