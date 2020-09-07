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
    
  

});