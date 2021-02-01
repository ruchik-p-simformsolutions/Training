//generics
//reusable block of code that can be used by different types

//extends object specify that only object of any type can be passed,wont work if we pass number,string,...
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const ob1 = merge({ name: "bob", hobbies: ["painting"] }, { age: 40 });
const ob2 = merge({ name: "bob", date: new Date() }, { age: 30 });
console.log(ob2);

//extending custom type
interface L {
  length: number;
}

function func<T extends L>(val: T) {
  let txt: string;
  if (val.length == 0) {
    txt = "got element";
  } else {
    txt = "got " + val.length + " elements";
  }
  return [val, txt];
}

const t = func("hello world");
console.log(t);

//keyof
function fun1<T extends object, U extends keyof T>(objC: T, key: U) {
  return "value is " + objC[key];
}
console.log(fun1({ n: "hi" }, "n"));

//classes
class Sample<T extends string> {
  //works with primitive types
  private list: T[] = [];
  addItem(ele: T) {
    //
    this.list.push(ele);
  }
  removeItem(ele: T) {
    this.list.splice(this.list.indexOf(ele), 1);
  }
  getAll() {
    return [...this.list];
  }
}
const t1 = new Sample();
t1.addItem("hello");
t1.addItem("world");
console.log(t1.getAll());
t1.removeItem("hello");
console.log(t1.getAll());

//Partial utility type
interface User {
  name: string;
  age: number;
}

function createUser(name: string, age: number): User {
  //partial means that all properties can be optional
  let objD: Partial<User> = {};
  objD.name = name;
  objD.age = age;
  //here it identifies as partial User not as User, so we typecast
  return objD as User;
}
