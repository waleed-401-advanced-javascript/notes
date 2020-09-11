
'use strict'

const mongoose = require('mongoose');

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
//mongoose.disconnect();
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const arg = new Input();
//console.log('index >>>>>>> ',arg);
const note = new Notes(arg);