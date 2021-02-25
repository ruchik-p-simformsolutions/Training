var person={
    name:"ruchik",
    lastname:"pravasi",
    city:"ahmedabad"
}
//fetching properties of osbjects
console.log(person.city);
console.log(person["lastname"]);
var x="name";
console.log(person[x]);

//loops
//fetching only value
console.log(".............");
var txt="",y;
for(y in person){
    //
    txt+=person[y]+" ";
}
console.log(txt);

//adding properties
console.log("..................");
person.nationality="indian";
var z;
for(z in person){
    console.log(person[z]);
}

//deleting property
console.log("*************");
delete person.city;
for(z in person){
    console.log(person[z]);
}


//function in object
console.log("..............");
var person2={
    name:"ruchik",
    lastname:"pravasi",
    city:"ahmedabad",
    fullname:function(){
        return this.name+" "+this.lastname;
    }
}

var fn=person2.fullname();
console.log(fn);

//getter and setter in function
console.log("..............");
var person3={
    name:"",
    lastname:"",
    city:"ahmedabad",
    get fullname(){
        return this.name+" "+this.lastname;
    },
    set nam(name){
        this.name=name;
    },
    set lnam(lastname){
        this.lastname=lastname;
    }
}
person3.nam="bob";
person3.lnam="brown";
console.log(person3.fullname);


//function constructor 
console.log(".............");
function human(firstName,lastName,nationality,city){
    this.firstName=firstName;
    this.lastName=lastName;
    this.nationality=nationality;
    this.city=city;
}
//cant add new property to existing prototype by simply typing human.gender
//add new property by using prototype but remains same for all
human.prototype.gender="female";
//similarly can add funtion
human.prototype.fullname=function(){
    return this.firstName+" "+this.lastName;
}
//new property can be added to object or add it to object constructor


var boy1=new human("richard","john","indian","mumbai");
var boy2=new human("sherlock","homes","indian","delhi");
console.log(boy1.fullname());
console.log(boy2.city);

//default methods can be used to modify constructor
//for example
Object.defineProperty(boy1,"phoneNumber",{value:123456789});
console.log(boy1.phoneNumber);
//prevent any change to object 
// Object.freeze(human);