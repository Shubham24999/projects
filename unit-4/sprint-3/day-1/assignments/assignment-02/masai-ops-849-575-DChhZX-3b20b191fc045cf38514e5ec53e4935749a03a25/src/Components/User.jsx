import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'

export default function User({user,isDarkTheme}) {
    // const {isDarkTheme}=useContext(ThemeContext)
    const {name,position,points,img,level}=user
    console.log(user)
    // console.log()
    return (
        <div data-testid = "user" style={{backgroundColor:isDarkTheme?"black":"white",
        color:isDarkTheme?"white":"black"
        }}> 
        <div style={{display:"flex"}}>
            <img src={img} alt="" style={{width:"120px"}} />
            <h2>{name} <br /> {position}</h2>
        </div>
            <input data-testid = "level" type = "range" style={{accentColor:isDarkTheme?"yellow":"blue",display:"flex"}}/>
            <h2 >Proffesional Level {level}</h2>
            <h2>{points} Points</h2>
        </div>
    )
}
