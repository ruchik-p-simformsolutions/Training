//we can explicitly specify the type for input
//if we change number1 to string, it will throw a error
function add(number1: number, number2: number) {
  return number1 + number2;
}
const number1 = 12;
const number2 = 20;
console.log(add(number1, number2));

//object in typeScript is of (key,type) pair
//we can specify the type of object we are going to use
//we have to specify in (key,type) pair
const person: {
  name: string;
  age: number;
} = {
  name: "bob",
  age: 25,
};

//here we are only specifing that the person1 is object
const person1: object = {};
console.log(person.name);

//arrays and tuples
const person2: {
  name: string;
  age: number;
  //specifing type of array i.e array of string
  //if we add number or any other than string, will throw a error
  //if we want mix values, we can go for 'any[]' type but that will no longer be a feature of TS
  hobbies: string[];
  //here role is tuple, tuple is an array of fix length and fix type
  //voilating tuple parameters result in error
  role: [number, string];
} = {
  name: "abc",
  age: 20,
  hobbies: ["painting", "cricket"],
  role: [1, "admin"],
};

//we can also add value to array explicity
person2.hobbies.push("football");

for (const hobby of person2.hobbies) {
  console.log(hobby);
  //here we know array is of string type, so we can access all the methods available on string
  console.log(hobby.toUpperCase());
}

//we can change tuple by accesing through index
person2.role[1] = "employee";

//below code exception in ts, although we have tuple of 2 size we can still use push
person2.role.push("admin");
console.log(person2.role.length);

//enum
//if we want to have some mapped value,enum is used
enum Role {
  ADMIN,
  EMPLOYEE,
  MANAGER,
}
const person3: {
  name: string;
  age: number;
  role: number;
} = {
  name: "bob",
  age: 25,
  role: Role.EMPLOYEE,
};
console.log(person3.role);

//union
function add2(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

//custom type
type combineNumberString = number | string;
function add3(input1: combineNumberString, input2: combineNumberString) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

//function type
let fun: (a: number, b: number) => number;
fun = add;
console.log(fun(4, 4));

//callback function
function fun2(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}
fun2(3, 4, (result) => {
  console.log(result);
});

//unkonown type
let val1: unknown;
let val2: string;
val1 = 4;
val1 = "hello world";
if (val1 === "string") {
  val2 = val1;
}

//spread operator on array
const sports = ["cricket", "volleyball"];
const newSports = ["Hockey"];
newSports.push(...sports);
console.log(newSports);
//also on objects
const person4 = {
  name: "mark",
  age: 40,
};
//this will not copy person4 to person5,it will point to person4
// const person5=person4;
//to copy
const person5 = { ...person4 };

//rest parameters
const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curvalue) => {
    return curResult + curvalue;
  }, 0);
};

console.log(add4(8, 9, 7, 5, 6, 3, 5, 8, 4));


//array destructuring
const hobbies= ["painting", "cricket","reading"];
const [hobby1,hobby2,...remaininghobbies]=hobbies;
console.log(hobby1,hobby2);
//can also do with objects
