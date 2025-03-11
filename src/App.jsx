import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "jotai";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Protected from "./components/Auth/Protected";
import EmployeeDetailsPage from "./components/View_Details/EmployeeDetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Emipage from "./components/Emitable/Emipage";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/employee/:id"
            element={
              <Protected>
                <EmployeeDetailsPage />
              </Protected>
            }
          />
          <Route
            path="/emipage"
            element={
              <Protected>
                <Emipage />
              </Protected>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
