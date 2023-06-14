import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";


const getData=()=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com//mockapi/get-tech-products/data`) .then((res)=>res.json())
}
function Dashboard() {
  const {token,logout}=useContext(AuthContext)
  
  const [res,setres]=useState(false)
  const [Data,setData]=useState([])


  const fetchData=()=>{
    setres(true)
    getData()
    .then((d)=>{
      console.log(d)
      setData(d)
      setres(false)
    })
    .catch((err)=>{
      setres(true)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  

  return (res?<Loader />:<div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>logout()}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Data && Data.map((elm)=>{
          return <ProductsTable data={elm} />
        })}
      </div>
    </div>
);
}

export default Dashboard;
