import React, {useState} from 'react'
import { createContext } from 'react'


export const AuthContext=createContext()


export default function AuthContextProvider({children}) {
  const [oldisAuth,setisAuth]=useState(false)
   const [oldLoading,setLoading]=useState(false)
   const [oldErr,setErr]=useState(null)
   const [oldToken,setToken]=useState("")

  return (
    <AuthContext.Provider value={{isAuth:oldisAuth,loading:oldLoading,error:oldErr,token:oldToken,
    setLoadings:setLoading,setErrs:setErr,setTokens:setToken,setisAuths:setisAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
