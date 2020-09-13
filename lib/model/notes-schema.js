
'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  note: { type: String, required: true },
  category: { type: String, default: 'general', required: true },

});

module.exports = mongoose.model('notes', notes);
