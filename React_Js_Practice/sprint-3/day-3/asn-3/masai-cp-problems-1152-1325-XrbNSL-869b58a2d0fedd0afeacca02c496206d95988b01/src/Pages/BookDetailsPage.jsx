import React from 'react'
import { useParams } from 'react-router-dom'



export default function BookDetailsPage() {
    const {id}=useParams()
    console.log(id)
    
    return (
        <div>

            <div className="bookContainer" >
                <h5 className="title"> </h5>
                <div className="price"></div>
                <div className="section"></div>
                <div className="author"></div>
                <div className="description"> </div>
                <div className="isbn"></div>
            </div>
        </div>
    )
}
