'use strict';
require('dotenv').config()
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const arg = new Input();
const mongoose = require('mongoose');
const Food = require('./lib/model/notes-collection');
require('@code-fellows/supergoose');

// this should be in your .env file 
const mon = (process.env.MONGOOSE_URL);

mongoose.connect(mon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


async function allPrograme() {
    const arg = new Input();
    const note = new Notes();
    await note.execute(arg);
    mongoose.disconnect();
  }
  
  allPrograme();