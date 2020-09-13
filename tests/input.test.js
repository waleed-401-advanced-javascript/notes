'use strict'
const Input = require('../lib/input.js');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: { _: [], a: 'sda ' },
        args: { _: [], c: 'sda ' },
        argd: { _: [], delete: 'sda ' }
    }
});



describe('Input Module', () => {
    // test case
    it('valid() does nothing with invalid action', () => {
        let testInput = new Input();
        let args = { _: [], c: 'sda ' }
        expect(testInput.valid(args)).toBeFalsy();
    });

    it('valid() returns action and massage as payload', () => {
        let testInput = new Input();
        let args = { _: [], a: 'HELLO Darkness my old friend ' }
        expect(testInput.valid(args)).toBeTruthy();
    });
    it('getaction() delete argument', () => {
        let testInput = new Input();
        let argd = { _: [], delete: 'sda' }
        expect(testInput.getaction(argd)).toBeTruthy();
    });

    it('get notes will run if the note is valid and it has category and a note', () => {
        let testInput = new Input();
        let argd = { _: [], delete: 'sda', c: 'something' }
        expect(testInput.getnotes(argd)).toBeTruthy();
    });





});
