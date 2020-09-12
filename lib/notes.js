'use strict';
const notes = require('./model/notes-schema.js');
class Notes {

  constructor(args) {
   
    this.execute(args.actions);

  }

  execute(actions) {

    if (actions.action === 'add' || actions.action === 'a') {
      let data = this.add(actions)
      this.save(data)
    }
    else if (actions.action === 'list' && actions.category === true) {
      this.listAll();
    }
    else if (actions.action === 'list' && actions.category !== '') {
      this.listcategory(actions.category);
    } else if (actions.action === 'delete') {
      this.delete(actions.Id);
    }

    else { console.log(actions); }
  }
  add(actions) {
    this.payload = actions.payload;
    this.id = parseInt(Math.random() * 9999999999999);
    this.category = actions.category

    return { note: this.payload, category: this.category }
  }

  async save(options) {

    let record = new notes(options);
    let saved = await record.save();
    console.log("note saved This is fun ", saved)
    return saved;
  }
  async listAll() {
    console.log(" list all  function")
    let allnotes = await notes.find();
    console.log("list=>>>>>>" , allnotes)
    return allnotes;
  }
  async listcategory(filter) {
    console.log(" list category  function")
    let allnotes = await notes.find();
    let filterarray = [];
    for (let i = 0; i < allnotes.length; i++) {
      if (filter === allnotes[i].category) {
        filterarray.push(allnotes[i]);
      }
    }
    console.log(filterarray)
    return filterarray;
  }

  async delete(id) {
    console.log('delete function')
    let record = await notes.findByIdAndDelete(id);
    console.log(record);
  }
}

module.exports = Notes;