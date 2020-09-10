// 'use strict';

// const NotesColection = require('./model/notes-collection');
// const notesColection = new NotesColection();

// class Notes {
//   constructor() {

//   }

//   async execute(operation) {
//     if (operation.method.action === 'add') return this.add(operation);
//     if (operation.method.action === 'list') return this.list(operation);
//     if (operation.method.action === 'delete') return this.delete(operation);
//     if (operation.method.action === 'update') return this.update(operation);
//     else { console.log(operation.method); }
//   }

//   async add(operation) {
//     let entry = { text: operation.method.payload, category: operation.method.category };
//     console.log('note saved ', entry.text);
//     await notesColection.create(entry);
//   }

//   async delete(DataToDelete) {
//     console.log('Deleted Note ', DataToDelete.method.id);
//     await notesColection.delete(DataToDelete.method.id);
//   }

//   async update(operation){
//     let entry = { text: operation.method.payload, id: operation.method.id };
//     console.log('note updated ', entry.text);
//     await notesColection.update(entry.id,entry.text);
//   }

//   async list(categoryToList) {
//     let needToTest = categoryToList.method.category;
//     let data = needToTest !== true ? await notesColection.get(needToTest) : await notesColection.get();  
//     this.displayStyle(data);
//   }

//   displayStyle(data) {
//     if(data.length){
//       data.forEach(e => {
//         console.log();
//         console.log(e.text);
//         console.log('Category:', e.category, 'ID:', e._id);
//         console.log('-----------------------------------');
//       });
//     }else{
//       console.log('No data find');
//     }
//   }

// }

'use strict';

// Exports a constructor function
// Has a prototype method called execute() that executes the correct operation, given the above object
// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…
// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

function Notes(options) {
  this.action = options.action
  this.payload =options.payload
  console.log('Notes Options', options);

}
Notes.prototype.excute = function(){
  if(this.action ==='a' || this.action === 'add' ){
    
  }
}
Notes.prototype.add = function(){
  let newNote ={
    id: Math.ceil(Math.random()*100000),
    noteText: this.payload,
  };
  console.log(`id : ${newNote.id}  ; Adding Note: ${newNote.noteText}`);

}

// Notes.prototype.execute

// Notes.prototype.add

module.exports = Notes;