import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

function EmployeeForm(){


  const [empl, setEmpl] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salutation, setSalutation] = useState("");
  const [profileColour, setProfileColour] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState(0);
  const [employeeNumber, setEmployeeNumber] = useState();

  let history = useHistory();

  const saveData = (e) => {
      e.preventDefault();
      let dbData = {
        employeeNumber: employeeNumber,
        firstName: firstName,
        lastName: lastName,
        salutation: salutation,
        profileColour: profileColour,
        salary: salary
      };
      EmployeeService.createEmployee(dbData).then(resp =>{
        history.push("/")
      });

    };



  return(
    <Container>
      <h3>
        Employee Information
      </h3>

      <Col className="mb-3 ml-auto" xs={{offset: 9 }}>
        <Button variant="secondary" onClick={()=> history.push("/")}>Cancel</Button>{' '}
        <Button variant="primary" onClick={saveData}>Save</Button>
      </Col>

      <Form>


        <Form.Group as={Row} className="mb-3" controlId="formGroupFullName">
          <Form.Label column>First Name *</Form.Label>
          <Col>

            <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)}/>
          </Col>
          <Form.Label column>Full Name</Form.Label>
          <Col>
            <Form.Control type="text" disabled/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formGroupLastNameSal">
          <Form.Label column>Last Name *</Form.Label>
          <Col>
          <Form.Control type="text" onChange={e => setLastName(e.currentTarget.value)}/>
          </Col>
          <Form.Label column>Gross Salary $PY</Form.Label>
          <Col>
          <Form.Control type="text" onChange={e => setSalary(e.currentTarget.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formGroupSalutationColour">
          <Form.Label column>Salutation *</Form.Label>
          <Col>
            <Form.Select defaultValue="Choose..." onChange={e => setSalutation(e.currentTarget.value)}>
              <option></option>
              <option>Dr.</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
              <option>Mx.</option>
            </Form.Select>
          </Col>

          <Form.Label column xs={2}>Employee Profile Colour </Form.Label>
            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Green"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />

            </Col>

            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Blue"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />

            </Col>

            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Red"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
            <Col xs={1}>
              <Form.Check
                type="radio"
                label="Default"
                name="formHorizontalRadios"
                id="formHorizontalRadios4"
              />
        </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formGroupGender" xs={4} >
          <Form.Label column>Gender *</Form.Label>
            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios5"
            />

            </Col>

            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios6"
            />

            </Col>

            <Col xs={1}>
              <Form.Check
              type="radio"
              label="Unspecified"
              name="formHorizontalRadios"
              id="formHorizontalRadios7"
            />
          </Col>

        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formGroupEmpNumber" xs={4}>
          <Form.Label column>Employee # *</Form.Label>
            <Col>
            <Form.Control type="number" value={employeeNumber} onChange={e => setEmployeeNumber(e.currentTarget.value)}/>
            </Col>
        </Form.Group>


</Form>

    </Container>
  );
}

export default EmployeeForm;
