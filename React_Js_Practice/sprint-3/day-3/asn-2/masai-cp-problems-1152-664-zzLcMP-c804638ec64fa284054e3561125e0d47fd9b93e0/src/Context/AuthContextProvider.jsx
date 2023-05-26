
import {createContext,useState} from "react"

export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)

          const login = () => {
            // console.log()
            setisAuth(true);
          };
          const logout = () => {
            setisAuth(false);
          };


    return (
        <AuthContext.Provider  value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
    )
}


