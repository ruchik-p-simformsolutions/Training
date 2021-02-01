"use strict";
const ins = {
    name: "bob",
    msg: ["hello", "world"],
    sDate: new Date(),
};
//typeguard
//its a idea of checking certain property or method exists before using it
function ad(number1, number2) {
    if (typeof number1 === "string" || typeof number2 === "string") {
        return number1.toString() + number2.toString();
    }
    return number1 + number2;
}
function printObject(ob) {
    if ("msg" in ob) {
        console.log("its 1st object");
    }
    if ("sDate" in ob) {
        console.log("its 2nd object");
    }
}
printObject(ins);
//instance of
//only with class not with interface
class A {
    msg() {
        console.log("hi");
    }
}
class B {
    msg() {
        console.log("hi");
    }
    msg2() {
        console.log("people");
    }
}
const a = new A();
const b = new B();
function check(c) {
    c.msg();
    if (c instanceof B) {
        c.msg2();
    }
}
check(a);
check(b);
//typecasting
const value1 = document.getElementById("user-input");
const value2 = document.getElementById("user-input");
const s1 = {
    name: "bob",
    lastname: "brown",
};
function add1(number1, number2) {
    if (typeof number1 === "string" || typeof number2 === "string") {
        return number1.toString() + number2.toString();
    }
    return number1 + number2;
}
console.log(add1(10, 20));
