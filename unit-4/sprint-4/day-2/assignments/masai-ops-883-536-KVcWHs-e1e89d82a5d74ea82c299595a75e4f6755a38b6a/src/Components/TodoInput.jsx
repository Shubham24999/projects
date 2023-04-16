import { useState } from "react";
import axios from "axios";
// import Todo from "./Todo"
// import fetchTodo from "./Todo"

function TodoInput({AfteraddingData}){

    const [todo,settodo]=useState("")
    

    const handleClick=(todo)=>{
        // console.log(task)
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
            // <Todo />
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    console.log(todo)
    return <div>
    <input type="text" onChange={(e)=>settodo(e.target.value)}/>
    <button onClick={()=>handleClick(todo)}>Add Todo</button>
  </div>
}
export default TodoInput

