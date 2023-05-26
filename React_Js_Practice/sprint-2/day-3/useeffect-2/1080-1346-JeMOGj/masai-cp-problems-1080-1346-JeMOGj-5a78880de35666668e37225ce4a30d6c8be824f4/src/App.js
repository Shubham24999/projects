
import {useState} from "react";
import Employeedashboard from "./Componenets/Employeedashboard";
import Pagination from "./Componenets/pagination";
function App() {
  const [page,setPage]=useState(1)
  const [total,setTotal]=useState(0)
  let n=0
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
  .then((res)=>res.json())
  .then((d)=>{
    console.log(d.data)
    setTotal((d.data).length)
    n=Math.floor(total/10)
    console.log(n)
  })
  .catch((err)=>{
    console.log(err)
  })
  console.log(n)

  function handleClick(val){
    setPage(page+val)
  }
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <Employeedashboard page={page}/>
    
      </div>
      <Pagination n={n} handleClick={handleClick}/>
   
    </div>
  );
}

export default App;
