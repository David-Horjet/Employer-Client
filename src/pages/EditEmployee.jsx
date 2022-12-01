import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNav from "../components/Main/SideNav";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmployeeRoute, updateEmployeeRoute } from "../utils/APIRoutes";
import RoundLoader from "../components/Loaders/RoundLoader";
import toastOptions from "../components/Toast/ToastOptions";
import { authAxios } from "../utils/Axios";
import EditEmployeeContainer from "../components/Main/EditEmployeeContainer";

function EditEmployee() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [singleEmployee, setSingleEmployee] = useState({});
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: singleEmployee.firstName,
    lastName: singleEmployee.lastName,
    email: singleEmployee.email,
    field: singleEmployee.field,
    salary: singleEmployee.salary,
    age: singleEmployee.age,
  });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchEmployee() {
      const response = await authAxios.get(`${getEmployeeRoute}/${id}`);
      setSingleEmployee(response.data.data);
      if (response) {
        setSalary(response.data.data.salary.split("$")[1].split(",")[1]);
      }
    }
    return () => {
      fetchEmployee();
    };
  }, [setSingleEmployee, setSalary, id]);

  useEffect(() => {
    document.title = "Edit Employee";
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const response = await authAxios.put(
        `${updateEmployeeRoute}/${id}`,
        values
      );
      console.log(response);
      if (response.data.status === false) {
        setIsFetching(false);
        toast.error(response.data.msg, toastOptions);
      }
      if (response.data.status === true) {
        setIsFetching(false);
        setTimeout(() => {
          navigate("/");
        }, 4000);
        toast.success(response.data.message, toastOptions);
      }
    } catch (error) {
      setIsFetching(false);
      // toast.error("Internal server error occured", toastOptions);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Container className="bg-light">
        <main className="main row">
          <SideNav />
          <EditEmployeeContainer
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isFetching={isFetching}
            RoundLoader={RoundLoader}
            singleEmployee={singleEmployee}
            salary={salary}
          />
        </main>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
  main {
  }
`;

export default EditEmployee;
