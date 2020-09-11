'use strict';
require('dotenv').config()
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const argument = new Input();
const output = new Notes(argument);

output.excute();
output.add();


// const mongoose = require('mongoose');
// const Food = require('./lib/model/notes-collection');
// require('@code-fellows/supergoose');

// // this should be in your .env file 
// const mon = (process.env.MONGOOSE_URL);

// mongoose.connect(mon, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });
