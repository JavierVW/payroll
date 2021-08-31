package com.javiervanwyk.backendspringboot.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")

public class Employee {

    public Employee(){}

    //setting primary key. turn on below comment after id to auto increment if employeenumber is a long
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "employee_number")
    private String EmployeeNumber;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "salutation")
    private String salutation;
    @Column(name = "profile_colour")
    private String profileColour;
    @Column(name = "gender")
    private String gender;
    @Column(name = "salary")
    private String salary;



    public Employee(String EmployeeNumber, String firstName, String lastName, String salutation, String profileColour, String gender, String salary) {
        super();
        this.EmployeeNumber = EmployeeNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salutation = salutation;
        this.profileColour = profileColour;
        this.gender = gender;
        this.salary = salary;
    }

    public String getEmployeeNumber() {
        return EmployeeNumber;
    }

    public void setEmployeeNumber(String employeeNumber) {
        EmployeeNumber = employeeNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }

    public String getProfileColour() {
        return profileColour;
    }

    public void setProfileColour(String profileColour) {
        this.profileColour = profileColour;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }
}
