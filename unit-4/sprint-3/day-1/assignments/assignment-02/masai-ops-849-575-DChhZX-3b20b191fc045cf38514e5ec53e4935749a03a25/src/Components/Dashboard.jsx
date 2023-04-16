import React from 'react'
import data from "../db.json"
import { useContext,useRef } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import User from './User'


export const Dashboard = () => {
    const ref=useRef(null)
    // console.log(data)
    const val=useContext(ThemeContext)
    // console.log(isDarkTheme,HandleClick)
    // const light={backgroundColor:"white",color:"black"}
    // const dark={backgroundColor:"black",color:"white"}
    // theme?light:dark

    const checkValue=()=>{
        ref.current.value==="Light Theme"?val.setTruetheme():val.setFalsetheme()
    }

    return (
        <div data-testid = "dashboard-cont" 
        style={{
            backgroundColor:val.isDarkTheme?"black":"white",
        }}>
            <select data-testid = "select-theme" onChange={checkValue} ref={ref} style={{margin:"15px"}}>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            {data.map((elm)=> <User user={elm} isDarkTheme={val.isDarkTheme} key={elm.id}/>)}
        </div>
)
}
