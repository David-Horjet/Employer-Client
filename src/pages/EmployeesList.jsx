import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import EmployeesListContainer from '../components/Main/EmployeesListContainer';
import SideNav from '../components/Main/SideNav';
import { getEmployeesRoute } from '../utils/APIRoutes';
import { authAxios } from "../utils/Axios"

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await authAxios.get(getEmployeesRoute);
      setEmployees(response.data.data)
    }
  
    return () => {
      fetchEmployees()
    }
  }, [setEmployees])
  

  useEffect(() => {
    document.title = "Dashboard - Crud-App";
  });


  return (
      <Container>
      <main className='main row'>
        <SideNav/>
        <EmployeesListContainer employees={employees}/>
      </main>
    </Container>
  )
}

const Container = styled.div`
overflow: hidden;
main {
}
`;

export default EmployeesList