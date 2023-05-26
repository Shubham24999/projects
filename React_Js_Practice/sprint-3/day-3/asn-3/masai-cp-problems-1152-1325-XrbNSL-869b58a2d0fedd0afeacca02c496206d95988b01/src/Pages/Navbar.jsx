import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {

    return (
        <div>
        <div>
            {/* <Link to="mythology">Mythology</Link>
            <Link to="mystery">Mythology</Link>
            <Link to="history">Mythology</Link>
            <Link to="technology">Mythology</Link> */}
        </div>
        <div className="navbar" style={{display:"flex",margin:"auto",justifyContent:"space-around"}} >
            {/* <h4 className="mythology">Mythology</h4>
            <h4 className="mystery">Mystery</h4>
            <h4 className="history">History</h4>
            <h4 className="technology">Technology</h4> */}
            <Link to="mythology">Mythology</Link>
            <Link to="mystery">Mystery</Link>
            <Link to="history">History</Link>
            <Link to="technology">Technology</Link>
        </div>
        </div>
    )
}
