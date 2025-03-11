import EmployeeTable from "./Table_items/EmplyeeTable";
import useLogout from "../hooks/useLogout";
import { userState } from "../jotai/userState"; 
import { useAtomValue } from "jotai"; 
import { User, Mail, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { logout, isLoggingOut } = useLogout();
  const user = useAtomValue(userState);
  return (
    <div className="container">
      <div className="mt-5 card p-4 shadow-sm">
        <h2 className="card-title d-flex align-items-center gap-2">
          <User size={24} className="text-primary" /> Welcome, {user?.name}
        </h2>
        <p className="card-text text-muted d-flex align-items-center gap-2">
          <Mail size={20} className="text-secondary" /> {user?.email}
        </p>
        <h1 className="display-6 mt-4">Employee List</h1>
        <button
          onClick={logout}
          className="btn w-40 ms-2 btn-danger mt-3 d-flex align-items-center gap-2 p-2"
          disabled={isLoggingOut} // Disable button while logging out
        >
          {isLoggingOut ? (
            <div className="d-flex">
            <div className="spinner-border text-light" role="status">
            </div>
            </div>
          ) : (
            <>
              <LogOut size={20} /> Logout
            </>
          )}
        </button>
        <div className="mt-4">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
