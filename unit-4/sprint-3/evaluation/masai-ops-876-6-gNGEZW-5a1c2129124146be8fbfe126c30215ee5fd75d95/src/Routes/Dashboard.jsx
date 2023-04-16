import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
function Dashboard() {

  const {token,logoutUser}=useContext(AuthContext)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>logoutUser()}>Logout</button>
        <p>
          Token:{token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
      </div>
      <div data-testid="pagination-container"><Pagination /></div>
    </div>
  );
}

export default Dashboard;
