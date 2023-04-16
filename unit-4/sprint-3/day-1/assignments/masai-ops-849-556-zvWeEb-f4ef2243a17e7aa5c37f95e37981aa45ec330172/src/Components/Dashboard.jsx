import React from 'react'
// import AuthContext from "../Context/AuthContextProvider"
export const Dashboard = ({token,changeEvent}) => {
    // const {token,onChange}=React.useState(AuthContext)

    return (
        <div>
            <h3 data-testid = "token" >Token:{token} </h3>
            <button data-testid = "logout" onClick={()=>{changeEvent()}}>LOGOUT</button>
        </div>
    )
}
