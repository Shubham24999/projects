import { useState } from "react"


const Todoinput=({handleAdd})=>{
    const [value,setvalue]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        handleAdd(value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={()=>setvalue(value)}/>
        <input type="submit" disabled={!value} />
    </form>
  )
}

export default Todoinput