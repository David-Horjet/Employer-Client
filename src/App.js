import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EmployeesList from "./pages/EmployeesList";
import SingleEmployee from "./pages/SingleEmployee";
import EditEmployee from "./pages/EditEmployee";
// import { Context } from "./context/Context";


function App() {
  // const {user} = useContext(Context);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/new" element={<AddEmployee/>}/>
            <Route path="/all" element={<EmployeesList/>}/>
            <Route path="/:id" element={<SingleEmployee/>}/>
            <Route path="/edit/:id" element={<EditEmployee/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
