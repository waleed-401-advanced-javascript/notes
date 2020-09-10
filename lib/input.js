'use strict';

// Exports a constructor function
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// On instantiation, evaluates and validates the input
// Is the command (i.e. ‘–add’) a valid command
// Is there data associated with the command
// Returns an instance containing the action to perform and the payload for the action

const minimist = require('minimist');

class Input {
  constructor() {
  
    const args = minimist(process.argv.slice(2));
    console.log('Args:', args);
    this.action = this.getAction(args);
    this.payload = this.confirmPayload(args.add ||args .a);

  }
  getAction(action) {
    console.log('Action :', action);
    if(action.add ){return 'add';}
    else if(action.a){return 'a'}
    else{console.log('Enter a valid action add or a');}
  };
  confirmPayload(payload){
    console.log('Payload :', payload);
    if (payload){
      return payload;
    } else return ('Invalid Payload');
  };
  
  
  

 
}
console.log('at Input.js');


module.exports = Input;


