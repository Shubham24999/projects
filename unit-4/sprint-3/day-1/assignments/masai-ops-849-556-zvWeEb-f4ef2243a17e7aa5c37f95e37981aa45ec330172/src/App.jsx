import React from 'react'
import Login from './Components/Login'
import AuthContext from "../Context/AuthContextProvider"
import { Dashboard } from './Components/Dashboard'
export default function App() {

  let {isAuth,onChange}=React.useContext(AuthContext)

  return (
    <div>
      <Login />
    </div>
  )
}
