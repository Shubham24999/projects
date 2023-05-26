import { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";



const getData=(page)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${page}`).then((res)=>res.json())
}


export const EmployeesTable = () => {

  const [Data,setData]=useState([])
  const [page,setpage]=useState(1)
  const [filtervalue,setfiltervalue]=useState("")
  let totalPages=0
  let  [item,setitem]=useState([])
  
  let ref=useRef(null)

  const fetchData=(page)=>{
    getData(page)
    .then((d)=>{
      console.log(d.data)
      setData(d.data)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // useEffect(()=>{
    // fetchdatawithcondition(filtervalue)
    // const fetchdatawithcondition=(filtervalue)=>{

  //     fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10&filterBy=${filtervalue}`)
  //     .then((res)=>res.json())
  //     .then((d)=>{
  //       console.log(d)
  //       setData(d.data)
  //       // setitem(d.data)
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  //   // } 
  // },[filtervalue])
  
  useEffect(()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
  .then((res)=>res.json())
  .then((d)=>{
    setitem(d.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  },[])
  totalPages=Math.floor((item.length)/10)

  useEffect(()=>{
    fetchData(page)
  },[page])

  const HandleClick=(val)=>{
    console.log("hii")
    setpage(val)
  }

  const SelectValue=()=>{
    setfiltervalue(ref.current.value)
    console.log(ref.current.value)
    
  }

  return (
    <div>
      <div>
        <div>
          <select ref={ref} onChange={SelectValue}>
            <option value="hr">hr</option>
            <option value="finance">finance</option>
            <option value="marketing">marketing</option>
            <option value="engineering">engineering</option>
            <option value="operations">operations</option>
          </select>
        </div>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {Data && Data.map((elm)=>{
              return (<tr key={elm.id}>
                <td>{elm.id}</td>
                <td className="name">{elm.name}</td>
                <td className="gender">{elm.gender}</td>
                <td className="department">{elm.department}</td>
                <td className="salary">{elm.salary}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
      <Pagination totalPages={totalPages} HandleClick={HandleClick}/>
    </div>
  );
};
