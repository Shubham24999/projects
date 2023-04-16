import React from 'react'
import { Link } from 'react-router-dom'
// import { Routes,Route } from "react-router-dom";
let links=[
  {path:"/",title:"Home"},
  {path:"/contact",title:"Contact"},
  {path:"/about-us",title:"About"},
  {path:"/services",title:"Services"},
  {path:"/login",title:"Login"}
]

function NavBar() {
  
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      {links.map((link)=>{
        return <Link key={link.path} to={link.path} >{link.title}</Link>
      })}
      </div>
      
    </>
  )
}

export default NavBar
