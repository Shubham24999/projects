import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./Employeecard";

const fetchData=(page)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${page}`) .then((res)=>res.json())
}

const Employeedashboard = ({page}) => {

  const [data,setData]=useState([])


  function getData(page){
    fetchData(page)
    .then((d)=>{
      // console.log(d)
      setData(d.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getData(page)
  },[page])

  return (
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
       {data.map((item)=>{        
             return <EmployeeCard key={item.id} name={item.name} department={item.department} image={item.image} gender={item.gender} salary={item.salary}/>      
        })}
      </tbody>
    </table>   
  );
};

export default Employeedashboard;
