import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"

// const getData=()=>{
//   return fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`) .then((res)=>res.json())
// }
export default function SectionPage({elm}) {
  console.log(elm)
  // const [book,setbook]=useState([])
  // const {id}=useParams()
  // const fetchData=(id)=>{
  //   getData(id)
  //   .then((d)=>{
  //     console.log(d)
  //     setbook(d)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }

  // useEffect(()=>{
  //   fetchData(id)
  // },[])

  return (
    <div>

      <div className="sectionContainer">
      {/* Map the below the div against your books data */}
        <div  className="bookCard" >
        <h5 className = "title" >{elm.title} </h5>
          <div className = "price" > {elm.price}</div>
          <div className = "author" >{elm.author} </div>
        </div>
      </div>
    </div>
  )
}
