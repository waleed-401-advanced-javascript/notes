 'use strict'

const { collection } = require("../lib/model/notes-schema.js");
require('@code-fellows/supergoose');
const Notes = require('../lib/model/notes-collection.js');
const newNote = new Notes();

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');
 jest.mock('minimist');
 const minimist = require('minimist');

// minimist.mockImplementation(()=> {
//     return {
//         a: { action: 'add', payload: 'msg' },
        
    
//     }
// });


describe('Notes Module', ()=> {
    
    // it('execute() with wrong method', () =>{
    //     let options = new Notes({method:'method error: Invalid method'});
    //     expect(console.log).toHaveBeenCalled();
    //   });
    
    //   it('execute() without msg', () =>{
    //     let options = new Notes({method:'404 msg not found'});
    //     expect(console.log).toHaveBeenCalled();
    //   });
    
    //   it('execute() with correct method and a msg', () =>{
    //     let options = new Notes({method:{action: 'add', payload: 'msg'}});
    //     expect(console.log).toHaveBeenCalled();
    //   });
    it('can create a new notes record', () => {
      let obj = { note: 'abc ', category: 'D' };
      newNote.create(obj).then(record => {
          Object.keys(obj).forEach(key => {
              expect(record[key]).toEqual(obj[key]);
          });
      });
  });
  it('can get() a notes record', async ()=> {
       let obj = { note: ' any note ', category: 'life' };
      const record = await newNote.create(obj);
      console.log("record : ",record)
      const Item = await newNote.get(record._id);
      console.log("Notes : ",Item)
      Object.keys(obj).forEach(key => {
          expect(Item[key]).toEqual(obj[key]);
      });
  });

      it('will update new notes ', async () => {
        let obj = { note: 'to be or not to be ', category: 'life' };
        const record = await newNote.create(obj);
        let update_obj={ note: 'One piece is cool ', category: 'cool' }
        const Item = await newNote.update(record._id,update_obj);
        console.log("Notes : ",Item)
        Object.keys(obj).forEach(key => {
            expect(Item[key]).toEqual(obj[key]);
        });
    });

    it('it will  Delete notes record', async () => {
        let obj = { note: 'potato ', category: 'life' };
        const record = await newNote.create(obj);
        const Item = await newNote.delete(record._id);
        console.log("Notes Deleted : ",Item)
        Object.keys(obj).forEach(key => {
            expect(Item[key]).toEqual(obj[key]);
        });
      });






});
