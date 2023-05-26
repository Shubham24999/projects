import React, { useContext,useRef, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
const init={email:"",password:""}

export default function Login() {
    const {token,login}=useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        }).then(res => res.json())
            .then((res) => {
                // setState(obj)
                console.log(res.token)
                login(res.token)

            })
            .catch(err => console.log(err))
    }

    const handleChangeemail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit}>
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    // ref={ref1}
                    name='email'
                    value={email}
                    onChange={handleChangeemail}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    // ref={ref2}
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
