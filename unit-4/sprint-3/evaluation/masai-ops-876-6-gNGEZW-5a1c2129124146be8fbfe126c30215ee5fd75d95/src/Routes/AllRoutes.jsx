import { Routes ,Route ,Link} from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Dashboard from "./Dashboard"
import SingleRestaurantPage from "./SingleRestaurantPage"
import PrivateRoute from "../Components/PrivateRoute";
function AllRoutes() {
  
  return (
    <div>
        <Routes>
        <Route path="/"  element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/login"  element={<PrivateRoute><Login /></PrivateRoute>}/>
        <Route path="/dashboard"  element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        {/* <Route path="/"  element={<h1>Home</h1>}/> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
