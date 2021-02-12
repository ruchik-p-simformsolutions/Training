const fs = require("fs");
const { title } = require("process");

const getNote = (title) => {
    const notes=loadNotes();
    const m=notes.find((note)=>note.title===title)
    if(m){
        console.log(m.body);
    }else{
        console.log("not found");
    }
};
const addNote = (title, body) => {
  const notes = loadNotes();
  //difference between find and filter is find stops if match is found and filter goes till end
  const duplicateNotes = notes.find((note) => note.title === title);
//   const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("failed...");
  }
};

const saveNotes =  (notes)=> {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("sample.json", dataJSON);
};

const loadNotes =  () =>{
  try {
    const databuffer = fs.readFileSync("sample.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) =>{
  //
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) =>note.title !== title);
  if (duplicateNotes.length > 0) {
    saveNotes(duplicateNotes);
  } else {
    console.log("not found title:" + title);
  }
};

const listAll=()=>{
    const notes=loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNotes: removeNotes,
  listAll:listAll,
};
