//Hoisting
console.log("hoisting...");
console.log(t);
var t=9;
fun4();
fun5();
function fun4(){
    //
    console.log("Hello world fun4");
}
function fun5(){
    //
    console.log("value is "+t);
}
//hoisting possible only on var, not on let and const


//Scope
console.log("scope chain..")
var t1=10;
function fun6(){
    //
    fun7();
    function fun7(){
        t2=6;//assigning value without declaring, automatically becomes global
        console.log(t2);
        console.log(t1);//follows scope chain, first looks at fun7, then fun6, untill global lexical environment
    }
}
fun6();
console.log(t2);

//Closure
console.log("closure..")
function x(){
    var a=8;
    function y(){
        console.log(a);
    }
    return y;
}

var z=x();
z();



//immediately invoked function expression or self invoking function
//invoked immediately after definition
//generally implements closure
console.log("IIFE");
var t3=50;
(function (num){
    //
    var t2=45;
    function fun7(num){
        console.log(t2);
        console.log(num);
    }
    fun7(num);
})(t3);