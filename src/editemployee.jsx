import React, { useState, useEffect } from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EditForm from './components/EditForm';
import EmployeeService from './services/EmployeeService';

function editemployee(){


  return(
    <React.Fragment>
      <br/>
      <EditForm/>

    </React.Fragment>
  );
}

export default editemployee;
