import {Link} from "react-router-dom"

const links=[
    {path:"/login",titile:"Login"},
    {path:"/",titile:"Home"},
    {path:"/about",titile:"About"},
    {path:"/contact",titile:"Contact"},
    {path:"/products",titile:"Products"}

]


function Navbar() {
    return(
        <div className = "navbar" style={{"display":"flex","justifyContent":"space-between"}}>
            {links.map((link)=>{
                return <Link key={link.path}  to={link.path} >{link.titile}</Link>
            })}
        </div>
    )
}

export { Navbar }