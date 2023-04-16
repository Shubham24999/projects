import { useEffect, useState } from "react";
import axios from "axios";
import TodoInput from "./TodoInput"

const getTodo=(url)=>{
  return axios.get(url)
}
const Todos = () => {
  const [todos,settodos]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

 function fetchTodo(){
    setLoading(true)
    getTodo(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((d)=>{
      // console.log(d.data)
      settodos(d.data)
    })
    .catch((err)=>{
      console.log(err)
      setError(true)
    })
    .finally(()=>{
      setLoading(false)
    })
  }


  function AfteraddingData(){
    fetchTodo()
  }
  useEffect(()=>{
    fetchTodo()
  },[])
console.log(loading)
  return (
    loading?<h1>Loading...</h1>:error?<h1>Something Went wrong...</h1>:(
      <div>
      <TodoInput AfteraddingData={AfteraddingData}/>
      {todos.map((elm)=>
        <div key={elm.id}>{elm.title}-{elm.status?"True":"False"}</div>
      )}
    </div>
    )
  );
};

export default Todos;
