//require
//loading OS file system in node application
//require('fs') is node module
const fs = require("fs");
const val = require("./moduleBasic");
const validator = require("validator");
//yargs used for command line input and parsing
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

//writeFileSync used for writing into file asynchronous
fs.writeFileSync("sample.txt", "hello world");
//this will override
//fs.writeFileSync("sample.txt","hello all");
//appendFileSync will append content to existing file
fs.appendFileSync("sample.txt", "this is sample file");

// console.log(val.PI);
// console.log(chalk.blue(val.add(3,5)));
// console.log(new val.Employee("james richardson"));

// console.log(validator.isEmail("abc@gmail.com"));
// console.log(validator.isURL("wwwgooglecom"));
const warning = chalk.keyword("orange");
// console.log(warning('warning!'));

//command line input
// console.log(yargs.argv);
//commands in yargs
yargs.command({
  command: "add",
  describe: "add a value..",
  builder: {
    title: {
      describe: "new title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "new body",
      demandOption: true,
      type: "string",
    },
  },
  handler (argv) {
    notes.addNote(argv.title, argv.body);
    // console.log("title added " + argv.title);
    // console.log("body added " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a value..",
  builder: {
    title: {
      describe: "new title",
      demandOption: true,
      type: "string",
    },
  },
  handler (args) {
    notes.removeNotes(args.title);
  },
});

yargs.command({
    command: "read",
    describe: "read a value..",
    builder: {
      title: {
        describe: "new title",
        demandOption: true,
        type: "string",
      },
    },
    handler (args) {
      notes.getNote(args.title);
    },
  });

yargs.command({
    command:"listAll",
    describe:"list all",
    handler(){
        notes.listAll();
    }
})
// console.log(yargs.argv);
yargs.parse();

//code for storing data into json file and reading, editing and saving it back
// const sampleData=JSON.parse(fs.readFileSync("sample.json").toString());
// sampleData.name="bob";
// sampleData.age=25;
// const sampleDataJson=JSON.stringify(sampleData);
// fs.writeFileSync("sample.json",sampleDataJson);