'use strict';

class Notes {
  constructor(operation) {
    this.execute(operation);
  }

  execute(operation) {
    if(operation.method.action === 'add'|| operation.method.action === 'a' )  this.add(operation);
    else{ console.log(operation.method); }
  }

  add(operation) {
    this.msg = operation.method.payload;
    this.id = parseInt(Math.random()*9999999999999);
  
    console.log('msg=',this.msg,' ','ID=',this.id);
  }

}
module.exports = Notes;