//intersection types
type obj1 = {
  name: string;
  msg: string[];
};
type obj2 = {
  name: string;
  sDate: Date;
};
type obj3 = obj1 & obj2;
const ins: obj3 = {
  name: "bob",
  msg: ["hello", "world"],
  sDate: new Date(),
};

//typeguard
//its a idea of checking certain property or method exists before using it
function ad(number1: number | string, number2: number | string) {
  if (typeof number1 === "string" || typeof number2 === "string") {
    return number1.toString() + number2.toString();
  }
  return number1 + number2;
}

type obj4 = obj1 | obj2;
function printObject(ob: obj4) {
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

type C = A | B;
const a = new A();
const b = new B();

function check(c: C) {
  c.msg();
  if (c instanceof B) {
    c.msg2();
  }
}
check(a);
check(b);

//typecasting
const value1 = <HTMLInputElement>document.getElementById("user-input")!;
const value2 = document.getElementById("user-input")! as HTMLInputElement;

//index properties
//if we do not know name of property in advance, we can assign it later
interface sample {
  [prop: string]: string;
}
const s1: sample = {
  name: "bob",
  lastname: "brown",
  //age:3, //not valid,string required
};

//function overloading
//typescript does not infer return type on its own, so function overloading can help
function add1(number1: number, number2: number): number;
function add1(number1: string, number2: string): string;
function add1(number1: number | string, number2: number | string) {
  if (typeof number1 === "string" || typeof number2 === "string") {
    return number1.toString() + number2.toString();
  }
  return number1 + number2;
}
console.log(add1(10,20));
