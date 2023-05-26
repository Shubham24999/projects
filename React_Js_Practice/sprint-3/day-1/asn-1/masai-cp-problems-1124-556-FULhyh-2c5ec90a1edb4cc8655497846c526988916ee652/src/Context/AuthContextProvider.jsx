import React, {createContext, useState} from 'react'

export const AuthContext=createContext()

export default function AuthContextProvider({children}) {

  const [isAuth,setisAuth]=useState(false)
  const [loading,setloading]=useState(false)
  const [error,seterror]=useState(false)
  const [token,settoken]=useState("")

  const handlelogout=()=>{
    // console.log(isAuth)
    console.log("hi")
    setisAuth(false)
    settoken("")
  }

  const login=(d)=>{
    console.log("hii")
    setisAuth(true)
    settoken(d)
  }


  return (
    <AuthContext.Provider value={{isAuth,token,handlelogout,loading,error,login}}>
      {children}
    </AuthContext.Provider>
  )
}
