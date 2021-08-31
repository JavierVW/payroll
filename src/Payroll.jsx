import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeService from './services/EmployeeService';

function Payroll(){


  return(
    <React.Fragment>
      <EmployeeList/>
      <br/>
      <br/>
      <EmployeeForm/>

    </React.Fragment>
  );
}

export default Payroll;
