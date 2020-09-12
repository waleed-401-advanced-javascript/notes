
'use strict'

const mongoose = require('mongoose');
const Collection = require('./lib/model/notes-collection.js')
const newnotes = new Collection()

require('dotenv').config();

const MONGOOSE_URL=process.env.MONGOOSE_URL;
mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>
    console.log("connect")
);

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const arg = new Input();

const note = new Notes(arg);