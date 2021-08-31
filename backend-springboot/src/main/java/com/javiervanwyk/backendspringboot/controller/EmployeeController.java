package com.javiervanwyk.backendspringboot.controller;

//REST API done here

import com.javiervanwyk.backendspringboot.exception.ResNotFoundException;
import com.javiervanwyk.backendspringboot.model.Employee;
import com.javiervanwyk.backendspringboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // get employee by id
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable String id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResNotFoundException("Employee not exist with employee number :" + id));
        return ResponseEntity.ok(employee);
    }

    // update employee
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String id, @RequestBody Employee employeeDetails){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResNotFoundException("Employee not exist with employee number :" + id));

        employee.setEmployeeNumber(employeeDetails.getEmployeeNumber());
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setSalutation(employeeDetails.getSalutation());
        employee.setProfileColour(employeeDetails.getProfileColour());
        employee.setGender(employeeDetails.getGender());
        employee.setSalary(employeeDetails.getSalary());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

}
