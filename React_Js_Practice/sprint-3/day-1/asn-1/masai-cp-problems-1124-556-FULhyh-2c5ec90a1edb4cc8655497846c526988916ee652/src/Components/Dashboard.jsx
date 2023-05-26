import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const {token,handlelogout}=useContext(AuthContext)
    // console.log("jhffd")

    return (
        <div >
            <h3 data-testid = "token" >Token:{token} </h3>
            <button data-testid = "logout" onClick={()=>handlelogout()} >LOGOUT</button>
        </div>
    )
}
