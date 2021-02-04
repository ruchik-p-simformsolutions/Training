//require
//loading OS file system in node application
//require('fs') is node module
const fs=require("fs");
const val=require("./moduleBasic");
const validator=require("validator");
const chalk=require("chalk");

//writeFileSync used for writing into file asynchronous
fs.writeFileSync("sample.txt","hello world");
//this will override
//fs.writeFileSync("sample.txt","hello all");
//appendFileSync will append content to existing file 
fs.appendFileSync("sample.txt","this is sample file");

console.log(val.PI);
console.log(chalk.blue(val.add(3,5)));
console.log(new val.Employee("james richardson"));

console.log(validator.isEmail("abc@gmail.com"));
console.log(validator.isURL("wwwgooglecom"));
const warning = chalk.keyword('orange');
console.log(warning('warning!'));