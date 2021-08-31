import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';
import { useHistory } from "react-router-dom";

function EmployeeList(props){

  const [empl, setEmpl] = useState([]);
  let history = useHistory();
  let tempVal = ""

  useEffect(() => {
    EmployeeService.getEmployees().then((resp)=>{
      setEmpl(resp.data)
    });
  }, []);

  const clickTable = () => {
    console.log("table clicked");
  };

  const editEmployeeDetails = (props) => {
    tempVal = "/editemployee/" + props

    history.push(tempVal)
  }




  return(
    <Container>
      <Row>
      <Col>
        <h3>Current Employees</h3>
      </Col>
      <Col>
        <Button variant="warning" href="/newemployee">Add Employee</Button>
      </Col>
      </Row>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Employee #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Salutation</th>
          <th>Profile Colour</th>
        </tr>
      </thead>

      <tbody>
        {empl.map(empl=>
          <tr key={empl.id} onClick={()=> editEmployeeDetails(empl.employeeNumber)}>
            <td>{empl.employeeNumber}</td>
            <td>{empl.firstName}</td>
            <td>{empl.lastName}</td>
            <td>{empl.salutation}</td>
            <td>{empl.profilecolour}</td>



          </tr>
        )}
      </tbody>
    </Table>
  </Container>
  );
}

export default EmployeeList;
