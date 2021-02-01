//classes were introduced in ES6
//before that in ES5 it was known as Constructor Function
//change to ES5 to know the change
class Employees {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

const per1 = new Employees("ruchik");

console.log(per1);

//methods in class
class Employees2 {
  name: string;
  //private element, only accessible inside class
  private employeesName: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  //here this:Employees says that the 'this' in the method will only refer to instance based on Employees class
  describe(this: Employees2) {
    //'this' will only point to caller object
    console.log("Name is " + this.name);
  }
  addEmployee(empName: string) {
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
  constructor(public name: string, private readonly id: number) {}
  describe(this: Employees3) {
    console.log(`Employee name is (${this.name}) and id is (${this.id})`);
  }
}

//inheritance
class Department {
  protected employeesName: string[] = [];
  constructor(name: string, private id: number) {}
  addEmployee(empName: string) {
    this.employeesName.push(empName);
  }
  displayEmployees() {
    console.log(this.employeesName);
  }
  //static method and properties are those which are not accessed by an instance of a class
  //static creates only one copy and shared by all instance
  //static cannot be accessed from constructor or non-static methods because they use 'this' and 'this' refer to instance
  //but can be access from constructor or non-static methods by using classname
  static yearOfDepartment = 2015;
  static createEmployee(name: string) {
    return { name: name };
  }
}
//we can inherit properties of a class to another class by using extends
//the class which inherits is child/sub class
//the class from which it is inherited is parent/super class
//here Department is parent and AccountsDepartment is child
class AccountsDepartment extends Department {
  msg: string;

  constructor(
    name: string,
    id: number,
    private values: string[],
    message: string
  ) {
    //we can call constructor of parent by using super
    //NOTE: super must be the first statement in child constructor
    //child class also can have its own parameters
    super(name, id);
    this.msg = message;
  }

  //we can override method of parent class
  addEmployee(empName: string) {
    //to access the private property of parent class in child,
    //property must be declared protected in parent
    this.employeesName.push(empName);
  }
  addValue(val: string) {
    this.values.push(val);
  }
  getValue(this: AccountsDepartment) {
    console.log(this.values);
  }

  //getter and setter
  get msginfo() {
    return this.msg;
  }
  set msginfo(message: string) {
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
abstract class Department2 {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  //abstract method has no implementation but we need to provide return type, also we need to change class to abstract
  //child class compulsory needs to implement static methods
  abstract describe(): void;
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
abstract class Department3 {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

class Finance2 extends Department3 {
  static instance: Department3;
  private constructor(name: string) {
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

/* **************** */
/* **************** */
//Interface
//inteface defines structure of an object i.e how an object should look like
interface Dept {
  //interface cannot have private properties
  //but you can have readonly property(assign only once)
  name: string;
  //we can provide optional property as below by using ?
  //same can be applied to class, functions, constructors
  yourmsg?: string;
  id: number;
  msg(m: string): void;
}

//we can assign it to variables
let d1: Dept;
d1 = {
  name: "IT",
  id: 120,
  msg(m: string) {
    console.log("message from dept " + this.id + " is " + m);
  },
};
d1.msg("hello everyone");

//here we have multiple interface implemented to a class
interface FirstName {
  firstname: string;
  fname(): void;
}
interface LastName {
  lastname: string;
  lname(): void;
}
//class must implement all the properties and methods of interface
class Name implements FirstName, LastName {
  firstname: string;
  lastname: string;
  constructor(firstname: string, lastname: string) {
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

//difference between abstract and interface is that interface needs only to have declaration,
//while abstact class can have both

//Inhertiance in interface
interface FName {
  firstname: string;
  fname(): void;
}
interface LName {
  lastname: string;
  lname(): void;
}
//you can inhert interface to another interface
//also multiple inheritance is possible in interface which was not allowed in classes
interface FullName extends FName, LName {
  lastname: string;
  lname(): void;
}
