const mongoose = require('mongoose');


const note = mongoose.Schema({
    text: { type: String, required: true },
    category: {type: String, required: true },
  
});

// create a model and expose it 
module.exports = mongoose.model('note', note);