import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeService from './services/EmployeeService';

function newemployee(){


  return(
    <React.Fragment>
      <br/>
      <EmployeeForm/>

    </React.Fragment>
  );
}

export default newemployee;
