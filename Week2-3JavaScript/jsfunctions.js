//functions declaration
console.log("functions declarations...")
function fun1(){
    //
    console.log("Hello world fun1");
}

var fun2=()=>{
    //
    console.log("Hello world fun2");
}

var fun3=function(){
    //
    console.log("Hello world fun3");
}
fun1();
fun2();
fun3();

console.log(fun1);
console.log(fun2);
console.log(fun3);


//IIFE or self-invoked function
(function(){
    //
    console.log("good afternoon..")
})();


//inbuilt object arguments
x = findMax(1, 123, 500, 115, 44, 88);
console.log(x);
function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}


const func=(callback)=>{
  setTimeout(()=>{
    callback("this is error",undefined);
  },2000)
}
func((error,obj)=>{
  if(error) return console.log(error);
  console.log(obj);
})