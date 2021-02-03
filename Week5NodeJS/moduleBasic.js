function add(a,b){
    return a+b;
}
const PI=3.14;
class Employee{
    name;
    constructor(name){
        this.name=name;
    }
}

//1st way
// module.exports.PI=PI;
// module.exports.Employee=Employee;
// module.exports.add=add;

//2nd way
module.exports={PI:PI,add:add,Employee:Employee};