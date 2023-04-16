import { createContext ,useState} from "react";


export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false)
    const [token,settoken]=useState(null)
    const loginUser=(token)=>{
        setisAuth(true)
        settoken(token)
    }

    const logoutUser=()=>{
        setisAuth(false)
        settoken("")
    }

    return <AuthContext.Provider value={{isAuth,loginUser,logoutUser,token}}>
        {children}
        </AuthContext.Provider>
}

export default AuthContextProvider;
