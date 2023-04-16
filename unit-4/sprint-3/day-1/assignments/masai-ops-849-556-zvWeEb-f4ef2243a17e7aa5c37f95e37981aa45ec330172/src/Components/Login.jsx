import React,{useContext,useRef} from 'react'
import AuthContext from "../Context/AuthContextProvider"
import { Dashboard} from './Dashboard'

export default function Login() {
    let val=useContext(AuthContext)

    // console.log(isAuth,login,logout)
    const ref1=useRef(null)
    const ref2=useRef(null)
    const submitForm=(e)=>{
        e.preventDefault()
        let obj={
            usename:ref1.current.value,
            password:ref2.current.value
        }

        val.setLoading(true)
        fetch(`https://reqres.in/api/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then((res)=>{
            val.setLoadings(false)
            val.setisAuths(true)
            return res.json()
        })
        .then((data)=>{
            console.log(data.token)
            val.setTokens(data.token)
        })
        .catch((err)=>{
            val.setLoadings(false)
            val.setTokens('')
            val.setisAuths(false)
        })
    }

    const changeEvent=()=>{
        val.setisAuths(false);
    }

    return (
        val.loading?<h1>Loading...</h1>:
            <div>
                <form data-testid = "auth_form" onSubmit={submitForm}>
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    ref={ref1}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    ref={ref2}
                />
                <br />
                <input type = "submit"/>

            </form> 
            {val.isAuth? <Dashboard token={val.token} changeEvent={changeEvent} />:""}
        </div>  
    )
}
