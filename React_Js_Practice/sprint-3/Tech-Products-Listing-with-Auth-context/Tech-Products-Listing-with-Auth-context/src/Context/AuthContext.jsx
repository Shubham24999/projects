import { createContext, useContext, useState } from "react";

export const AuthContext=createContext()

function AuthContextProvider({children}) {

    const [isAuth,setisAuth]=useState(false)
    const [token,settoken]=useState("")

    function login(val){
        settoken(val)
        setisAuth(true)
    }

    function logout(){
        settoken("")
        setisAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,login,logout,token}}>
        {children}
    </AuthContext.Provider>

}

export default AuthContextProvider;
