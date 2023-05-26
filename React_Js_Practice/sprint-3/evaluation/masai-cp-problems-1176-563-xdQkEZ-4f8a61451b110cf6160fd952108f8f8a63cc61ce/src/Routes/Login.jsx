import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";


function Login() {
  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const {isAuth,login,logout}=useContext(AuthContext)
  console.log(isAuth)
  
  // const user={
  //   "email":"",
  //   "password":""
  // }
  function HandleChange(e){
    console.log(e.target.value)
    if(e.target.name==="email"){
      setemail(e.target.value)
    }else{
      setpassword(e.target.value)
    }
    // if()
    // setuserdetail({...userdetail,[e.target.name]:e.target.value})
    // console.log(email,password)
  }

  console.log(email,password)
  const handleSubmit=(e)=>{
     e.preventDefault()
     fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
     })
     .then((res)=>{
      return res.json()
     })
     .then((d)=>{
      console.log(d.token)
      login(d.token)
     })
     .catch((error)=>{
      console.log(error)
     })
  }

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" value={email} onChange={HandleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={HandleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
