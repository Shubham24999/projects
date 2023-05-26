import React from 'react'
import Login from './Components/Login'
import {Dashboard} from "./Components/Dashboard"
import {useContext} from "react"
import {AuthContext} from "./Context/AuthContextProvider"

export default function App() {

  const {isAuth}=useContext(AuthContext)
  console.log(isAuth)

  return (
    <div>
        {isAuth===false?<Login />:<Dashboard />}
    </div>
  )
}
