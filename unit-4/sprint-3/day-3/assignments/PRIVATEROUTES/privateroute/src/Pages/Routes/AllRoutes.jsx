import { Routes,Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Settings from "../settings";
import Home from "../Home"
import Login from "../Login"


function AllRoutes(){
    return (<div>
        <div>
        <link to="/">HomePage</link>
        </div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/dashboard/settings" element={<Settings />}/>
        </Routes>
    </div>)
}
export default AllRoutes