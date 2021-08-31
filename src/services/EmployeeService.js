import axios from 'axios'

const EMPLOYEE_API_URL = "http://localhost:8081/api/v1/employees"

class EmployeeService{
  getEmployees(){
    return axios.get(EMPLOYEE_API_URL);
  }
  getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_URL + '/' + employeeId);
  }
  createEmployee(employee){
    return axios.post(EMPLOYEE_API_URL, employee);
  }
  updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_URL + '/' + employeeId, employee);
    }
}

export default new EmployeeService()
