import { useState } from "react"

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
        <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid= "count">{number}</h3>
        <button data-testid = "add-btn" onClick={()=>{handle(1)}}>+</button>
        <button data-testid = "subtract-btn" onClick={()=>{handle(-1)}}>-</button>
        <button data-testid = "double-btn" onClick={()=>{double()}}>Double</button>
    </div>
}

export default Counter