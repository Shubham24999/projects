import React,{useContext, useState} from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContextProvider'

const initial={email:"",password:""}
export default function Login() {
    const {isAuth,login}=useContext(AuthContext)
    const [user,setuser]=useState(initial)
    const [users,setusers]=useState([])

    const handleChange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        setusers([...users,user])
        setuser(initial)
        login()
    }
    console.log(isAuth)
    console.log(user,users)

    // if()
    return (isAuth?<Navigate to="/"/>:(<div>
        <form className = "auth_form" onSubmit={handleClick}>
            <input
                style = {{padding:"5px", margin: "10px", width: 200}}
                type = "email"
                className = "email"
                placeholder = "Enter Email"
                name="email"
                value={user.email}
                onChange={handleChange}
            />
            <br />
            <input
                style = {{padding:"5px", margin: "10px", width: 200}}
                type = "password"
                className = "password"
                placeholder = "Enter password"
                name="password"
                value={user.password}
                onChange={handleChange}
            />
            <br />
            <input className = "submit" type = "submit"/>

        </form>  
                      
    </div>))
}