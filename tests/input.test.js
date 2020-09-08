'use strict'

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(()=> {
    return {
        a: { _: [], a: 'sda ' },
        args: { _: [], c: 'sda ' }
    
    }
});

const Input = require('../lib/input.js');

describe('Input Module', ()=> {
    // test case
    it('valid() does nothing with invalid action', ()=> {
        const testInput= new Input();
       let args = { _: [], c: 'sda ' }
        expect(testInput.valid(args)).toBeFalsy();
    });
    it('valid() returns action and massage as payload', ()=> {
        const testInput= new Input();
       let args = { _: [], a: 'HELLO Darkness my old friend ' }
        expect(testInput.valid(args)).toBeTruthy();
    });
    it('add() with correct method and a msg', () =>{
        let options = new Notes();
        let input ={method:{action: 'add', payload: 'hiii', category: 'school'}};
        options.add(input);
        expect(console.log).toHaveBeenCalled();
      });
    
      it('delete()', () =>{
        let options = new Notes();
        let input ={method:{action: 'delete', id: '5ec42429d7c4e1070fc613c6'}};
        options.delete(input);
        expect(console.log).toHaveBeenCalled();
      });
    
      it('list()', () =>{
        let options = new Notes();
        let input ={method:{action: 'list', category: 'school'}};
        options.list(input);
        expect(console.log).toHaveBeenCalled();
      });
    
      it('displayStyle()', () =>{
        let options = new Notes();
        let input =[{text:'hii',category:'school',_id:'5ec42429d7c4e1070fc613c6'}];
        options.displayStyle(input);
        expect(console.log).toHaveBeenCalled();
      });
    
    
  

});