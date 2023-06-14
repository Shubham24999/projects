import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function PrivateRoute({children}) {

    const {isAuth}=useContext(AuthContext)
    console.log(isAuth)
    if(isAuth===false){
       return <Navigate to="/login"/>
    }
    return <div>{children}</div>
}

export default PrivateRoute;
