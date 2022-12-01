import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import styled from "styled-components";
import SideNav from '../components/Main/SideNav';
import SingleEmployeeDashboard from '../components/Main/SingleEmployeeDashboard';
import { getEmployeeRoute } from '../utils/APIRoutes';
import { authAxios } from "../utils/Axios"

function SingleEmployee() {
  const location = useLocation();
  const id = location.pathname.split("/")[1];
  const [singleEmployee, setSingleEmployee] = useState({})

  useEffect(() => {
    async function fetchEmployee() {
      const response = await authAxios.get(`${getEmployeeRoute}/${id}`);
      setSingleEmployee(response.data.data);
    }
  
    return () => {
      fetchEmployee()
    }
  }, [setSingleEmployee, id])
  

  useEffect(() => {
    document.title = `${singleEmployee.firstName}'s Employment Details`;
  });


  return (
      <>
      <Container>
      <main className='main row'>
        <SideNav/>
        <SingleEmployeeDashboard singleEmployee={singleEmployee}/>
      </main>
    </Container>
    <ToastContainer/>
      </>
  )
}

const Container = styled.div`
overflow: hidden;
main {
}
`;

export default SingleEmployee