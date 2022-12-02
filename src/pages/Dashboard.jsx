import React, {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import styled from "styled-components";
import DashboardContainer from '../components/Main/DashboardContainer';
import SideNav from '../components/Main/SideNav';
import { getEmployeesRoute } from '../utils/APIRoutes';
import { authAxios } from "../utils/Axios"

function Dashboard() {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await authAxios.get(getEmployeesRoute);
      setEmployees(response.data.data)
      setTotalEmployees(response.data.data.length)
    }
  
    return () => {
      fetchEmployees()
    }
  }, [setTotalEmployees, setEmployees])
  

  useEffect(() => {
    document.title = "Dashboard - Crud-App";
  });


  return (
      <>
      <Container>
      <main className='main row'>
        <SideNav/>
        <DashboardContainer totalEmployees={totalEmployees} employees={employees}/>
      </main>
    </Container>
    <ToastContainer/>
      </>
  )
}

const Container = styled.div`
overflow: hidden;
@media (max-width: 992px) {
  .row {#......m.j
    flex-direction: column;
  }
}
`;

export default Dashboard