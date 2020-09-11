 'use strict'

const Notes = require('../lib/notes');

// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');
 jest.mock('minimist');
 const minimist = require('minimist');

minimist.mockImplementation(()=> {
    return {
        a: { action: 'add', payload: 'msg' },
        
    
    }
});


describe('Notes Module', ()=> {
    // test case
    it('execute() with wrong method', () =>{
        let options = new Notes({method:'method error: Invalid method'});
        expect(console.log).toHaveBeenCalled();
      });
    
      it('execute() without msg', () =>{
        let options = new Notes({method:'404 msg not found'});
        expect(console.log).toHaveBeenCalled();
      });
    
      it('execute() with correct method and a msg', () =>{
        let options = new Notes({method:{action: 'add', payload: 'msg'}});
        expect(console.log).toHaveBeenCalled();
      });
});
