import { useState } from "react"
import "./Counter.css"


function Counter(){
    // const {num}=props
    const [number,setNumber]=useState(0)

    function handle(val){
        setNumber(number+val)
    }
    function double(){
        // console.log("hdgf")
        setNumber(number*2)
    }
    return <div>
        <h2 className = "counterheader">Counter</h2>
        <h3 className= "count">{number}</h3>
       <div className="btn">
       <button className = "addbtn" onClick={()=>{handle(1)}} >+</button>
        <button className = "subtractbtn" onClick={()=>{handle(-1)}} >-</button>
        <button className = "doublebtn" onClick={()=>{double()}}>Double</button>
       </div>
    </div>
}

export default Counter