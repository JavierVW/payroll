import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Payroll from './Payroll';
import Home from './Home';
import newemployee from './newemployee';
import editemployee from './editemployee';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <React.Fragment>
      <Router>
        <br/>
        <EmployeeList/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newemployee" component={newemployee} />
           <Route path="/editemployee/:id" component={editemployee} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
