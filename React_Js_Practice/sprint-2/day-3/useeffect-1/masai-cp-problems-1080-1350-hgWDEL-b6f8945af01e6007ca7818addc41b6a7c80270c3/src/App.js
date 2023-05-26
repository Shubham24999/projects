import React, { useEffect, useState,useRef } from "react";

const fetchData=(page)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=12&page=${page}`) .then((res)=>res.json())
}

function App() {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const inputRef = useRef(null);
  function getData(page){
    fetchData(page)
    .then((d)=>{
      console.log(d)
      setData(d.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const handle=(item)=>{
    setPage(item)
  }

  useEffect(()=>{
    getData(page)
  },[page])

  // console.log(data)
  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>            
            {data && data.map((item) => {
              return <tr key={item.id}>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
            })}            
          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
      {[1,2,3,4,5,6,7,8,9].map((item) => {
        return <button disabled={page===1} onClick={()=>handle(item)}>{item}</button>
      })}      
    </div>
  );
}

export default App;
