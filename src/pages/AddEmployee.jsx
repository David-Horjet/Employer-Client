import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNav from "../components/Main/SideNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEmployeeRoute } from "../utils/APIRoutes";
import RoundLoader from "../components/Loaders/RoundLoader";
import toastOptions from "../components/Toast/ToastOptions";
import AddEmployeeContainer from "../components/Main/AddEmployeeContainer"
import { authAxios } from "../utils/Axios";

function AddEmployee() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    field: "",
    salary: 0,
    age: 0,
  });
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    document.title = "Add Employee";
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation()) {
        setIsFetching(true)
        const response = await authAxios.post(createEmployeeRoute, values);
        if (response.data.status === false) {
          setIsFetching(false)
          toast.error(response.data.msg, toastOptions);
        }
        if (response.data.status === true) {
          setIsFetching(false)
          setTimeout(() => {
            navigate("/");
          }, 4000);
          toast.success(response.data.message, toastOptions);
        }
      }
    } catch (error) {
      setIsFetching(false)
      // toast.error("Internal server error occured", toastOptions);
    }
  };

  const handleValidation = () => {
    const { firstName, lastName, email, field, salary, age } =
      values;
    if (firstName === "") {
      toast.error("First name is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (lastName === "") {
      toast.error("Last name is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (field === "") {
      toast.error("Field is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (salary === "") {
      toast.error("Salary is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (age === "") {
      toast.error("Age is required", toastOptions);
      setIsFetching(false)
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
        <Container className="bg-light">
          <main className="main row">
            <SideNav />
            <AddEmployeeContainer
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              RoundLoader={RoundLoader}
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

export default AddEmployee;
