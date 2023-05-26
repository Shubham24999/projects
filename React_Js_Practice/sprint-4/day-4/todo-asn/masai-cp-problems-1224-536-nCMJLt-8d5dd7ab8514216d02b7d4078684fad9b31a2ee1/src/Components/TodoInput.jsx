import axios from "axios";
import { useState } from "react"

function TodoInput({AfteraddingData}){

    const [todo,settodo]=useState("")
    

    const handleClick=(todo)=>{
        axios
        .post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,{
                title:todo,
                status:false
            }
        )
        .then((res)=>{
            console.log(res.todos)
            AfteraddingData()
            settodo("")
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return <div data-testid = "todo-input">
        <input type="text" placeholder="add todo here..." onChange={(e)=>settodo(e.target.value)} />
       <div data-testid ="add-button" onClick={()=>handleClick(todo)}><button>Add Todo</button></div>
    </div>
}

export default TodoInput