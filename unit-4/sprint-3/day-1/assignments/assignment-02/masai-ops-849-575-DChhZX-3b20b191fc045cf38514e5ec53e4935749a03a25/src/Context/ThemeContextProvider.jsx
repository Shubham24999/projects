import React, {useState}from 'react'
import App from '../App'
import {createContext} from "react"
export const ThemeContext =createContext()
export default function ThemeContextProvider({children}) {
  const [oldBoolean,setBoolean]=useState(false)

  const setTrue=()=>{
    setBoolean(true)
  }
  const setFalse=()=>{
    setBoolean(false)
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme:oldBoolean,setTruetheme:setTrue,setFalsetheme:setFalse}}>
      {children}     
    </ThemeContext.Provider>
  )
}



{/* <App /> */}