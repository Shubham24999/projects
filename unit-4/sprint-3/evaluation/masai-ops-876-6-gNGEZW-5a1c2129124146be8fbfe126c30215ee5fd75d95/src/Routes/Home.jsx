import { Link } from "react-router-dom";
import Login from "./Login"
import Dashboard from "./Dashboard"
function Home() {
  // console.log("hii")
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
