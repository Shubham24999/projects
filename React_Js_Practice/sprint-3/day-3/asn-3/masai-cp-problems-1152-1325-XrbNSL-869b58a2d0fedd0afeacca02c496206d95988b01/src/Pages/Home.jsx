import {useState,useEffect} from "react"
// import SectionPage from "./SectionPage"
import BookDetalisPage from "./BookDetailsPage"
import { Navigate } from "react-router-dom"

const getData=()=>{
  return fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`) .then((res)=>res.json())
}

export default function Home() {

  const [booklist,setbooklist]=useState([])
  
  const fetchData=()=>{
    getData()
    .then((d)=>{
      console.log(d)
      setbooklist(d)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  const handleClick=(id)=>{
    console.log("hii"+id)
    return <Navigate to='/bookdetailspage/:id' />
  }

  return (
    <div>

      <div className="mainContainer">
        {booklist && booklist.map((elm)=>{
        return <div className="bookCard" style={{"border":"1px solid black",width:"50%",margin:"auto",cursor:"pointer"}} key={elm.id} onClick={()=>handleClick(elm.id)}>
          <h5 className = "title" > Title: {elm.title} </h5>
          <div className = "price" > Price:{elm.price} </div>
          <div className = "author" > Author: {elm.author}</div>
        </div>})}
      </div>
      
    </div>
  )
}
