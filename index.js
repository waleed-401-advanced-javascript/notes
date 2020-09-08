'use strict';
require('dotenv').config()
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const arg = new Input();
const mongoose = require('mongoose');
const Food = require('./lib/model/notes.schema');

// this should be in your .env file 
const mon = (process.env.MONGOOSE_URL);

mongoose.connect(mon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


const note = new Notes(arg);