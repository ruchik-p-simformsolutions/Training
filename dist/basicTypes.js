"use strict";
//we can explicitly specify the type for input
//if we change number1 to string, it will throw a error
function add(number1, number2) {
    return number1 + number2;
}
const number1 = 12;
const number2 = 20;
console.log(add(number1, number2));
//object in typeScript is of (key,type) pair
//we can specify the type of object we are going to use
//we have to specify in (key,type) pair
const person = {
    name: "bob",
    age: 25,
};
//here we are only specifing that the person1 is object
const person1 = {};
console.log(person.name);
//arrays and tuples
const person2 = {
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["EMPLOYEE"] = 1] = "EMPLOYEE";
    Role[Role["MANAGER"] = 2] = "MANAGER";
})(Role || (Role = {}));
const person3 = {
    name: "bob",
    age: 25,
    role: Role.EMPLOYEE,
};
console.log(person3.role);
//union
function add2(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
function add3(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
//function type
let fun;
fun = add;
console.log(fun(4, 4));
//callback function
function fun2(a, b, cb) {
    const result = a + b;
    cb(result);
}
fun2(3, 4, (result) => {
    console.log(result);
});
//unkonown type
let val1;
let val2;
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
const person5 = Object.assign({}, person4);
//rest parameters
const add4 = (...numbers) => {
    return numbers.reduce((curResult, curvalue) => {
        return curResult + curvalue;
    }, 0);
};
console.log(add4(8, 9, 7, 5, 6, 3, 5, 8, 4));
//array destructuring
const hobbies = ["painting", "cricket", "reading"];
const [hobby1, hobby2, ...remaininghobbies] = hobbies;
console.log(hobby1, hobby2);
//can also do with objects
