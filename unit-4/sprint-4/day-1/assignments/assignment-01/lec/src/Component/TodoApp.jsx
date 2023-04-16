import React, { useState } from "react";
import Todoinput from "./Todoinput";

const TodoApp=()=>{
    const [todos,setTodos]=useState([])

    const handleAdd=(value)=>{
        setTodos([...todos,{id:Date.now(),value,isComplted:false}])
    
    }

    const ToggleStatus=(id)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id==id){
                    todo.isComplted=!todo.isComplted
                }
                return todo
            })
             
        )
    }
    const DeleteToggle=()=>{
        
    }
    return <div>
        <h1>TodoApp</h1>
        <Todoinput />
        <div>
           { todos.map((todo)=>{
                 return <div>
                    <span>{todo.val}</span>
                    <button onClick={ToggleStatus}>Toggle</button>
                    <button onClick={DeleteToggle}>Delete</button>
                 </div>
            })}
        </div>
    </div>
}
export default TodoApp