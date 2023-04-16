import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";


const initial={email:"",passowrd:""}
function Login() {
  const {isAuth,loginUser}=useContext(AuthContext)
  const [user,setuser]=useState(initial)

  const handleChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }
  const handleClick=(e)=>{
    e.preventDefault()
    fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      loginUser(data.token)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
   
  if(isAuth){
    return <Navigate to="/" />
  }

  console.log(user)
  return (
    <div>
      <form data-testid="login-form" onSubmit={handleClick}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" name="email" value={user.email}
             placeholder="email" onChange={handleChange} />
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
              value={user.passowrd}
              onChange={handleChange}
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
