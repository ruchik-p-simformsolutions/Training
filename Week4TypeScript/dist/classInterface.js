"use strict";
//classes were introduced in ES6
//before that in ES5 it was known as Constructor Function
//change to ES5 to know the change
class Employees {
    constructor(n) {
        this.name = n;
    }
}
const per1 = new Employees("ruchik");
console.log(per1);
//methods in class
class Employees2 {
    constructor(n) {
        //private element, only accessible inside class
        this.employeesName = [];
        this.name = n;
    }
    //here this:Employees says that the 'this' in the method will only refer to instance based on Employees class
    describe() {
        //'this' will only point to caller object
        console.log("Name is " + this.name);
    }
    addEmployee(empName) {
        this.employeesName.push(empName);
    }
    displayEmployees() {
        console.log(this.employeesName);
    }
}
const per2 = new Employees2("pravasi");
per2.describe();
per2.addEmployee("Bob");
per2.addEmployee("brown");
per2.addEmployee("messi");
//cant do this to private i.e private elements outside class
// per2.employeesName[2]="messi";
//shorthand initialization and readonly
class Employees3 {
    //readonly does not allow id to change after initialization
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log(`Employee name is (${this.name}) and id is (${this.id})`);
    }
}
//inheritance
class Department {
    constructor(name, id) {
        this.id = id;
        this.employeesName = [];
    }
    addEmployee(empName) {
        this.employeesName.push(empName);
    }
    displayEmployees() {
        console.log(this.employeesName);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
//static method and properties are those which are not accessed by an instance of a class
//static creates only one copy and shared by all instance
//static cannot be accessed from constructor or non-static methods because they use 'this' and 'this' refer to instance
//but can be access from constructor or non-static methods by using classname
Department.yearOfDepartment = 2015;
//we can inherit properties of a class to another class by using extends
//the class which inherits is child/sub class
//the class from which it is inherited is parent/super class
//here Department is parent and AccountsDepartment is child
class AccountsDepartment extends Department {
    constructor(name, id, values, message) {
        //we can call constructor of parent by using super
        //NOTE: super must be the first statement in child constructor
        //child class also can have its own parameters
        super(name, id);
        this.values = values;
        this.msg = message;
    }
    //we can override method of parent class
    addEmployee(empName) {
        //to access the private property of parent class in child,
        //property must be declared protected in parent
        this.employeesName.push(empName);
    }
    addValue(val) {
        this.values.push(val);
    }
    getValue() {
        console.log(this.values);
    }
    //getter and setter
    get msginfo() {
        return this.msg;
    }
    set msginfo(message) {
        this.msg = message;
    }
}
const acc1 = new AccountsDepartment("max", 101, ["A", "B", "C"], "hello");
acc1.addValue("D");
acc1.addEmployee("MAX");
acc1.addEmployee("BDD");
acc1.getValue();
acc1.displayEmployees();
//getter and setter acts as proerty not as a method though we defined them as function
acc1.msginfo = "hello world";
console.log(acc1.msginfo);
//static use
//static method and properties are those which are not accessed by an instance of a class
//directly accessed by class
const emp1 = Department.createEmployee("ruchik");
console.log(emp1);
console.log(Department.yearOfDepartment);
//abstract
//if you want all class share some base methods or properties
//you cant create an instance of abstract class
class Department2 {
    constructor(n) {
        this.name = n;
    }
}
class Finance extends Department2 {
    describe() {
        console.log("hello");
    }
}
class HR extends Department2 {
    describe() {
        console.log("world");
    }
}
//private constructor
//if we want to create only one instance of the class, we use private constructor
class Department3 {
    constructor(n) {
        this.name = n;
    }
}
class Finance2 extends Department3 {
    constructor(name) {
        super(name);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Finance2("Fin");
        return this.instance;
    }
}
//both will point to same
const F1 = Finance2.getInstance();
const F2 = Finance2.getInstance();
console.log(F1.name + " " + F2.name);
//we can assign it to variables
let d1;
d1 = {
    name: "IT",
    id: 120,
    msg(m) {
        console.log("message from dept " + this.id + " is " + m);
    },
};
d1.msg("hello everyone");
//class must implement all the properties and methods of interface
class Name {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fname() {
        console.log(this.fname);
    }
    lname() {
        console.log(this.lname);
    }
}
