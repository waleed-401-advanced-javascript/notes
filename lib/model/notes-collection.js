'use strict';
const schema = require('./notes-schema.js');
class Notes {
    constructor() {
    }
    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }
    get(_id) {
        if (_id) {
            return schema.findOne({ _id });
        } else {
            return schema.find();
        }
    }
    update(_id, record) {
        return schema.findOneAndUpdate({ _id: _id }, record);
    }
    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }
}
module.exports = Notes;