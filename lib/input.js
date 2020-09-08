'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
    this.valid(args)

  }

  getMethod(method) {
    if (method.a || method.add) return this.getMsg(method.a || method.add, method.category);
    if (method.list) return { action: 'list', category: method.list };
    if (method.delete) return { action: 'delete', id: method.delete };
  else{ return 'method error: Invalid method'; }
  }

  getMsg(msg = '') {
    if (msg !== true) return { action: 'add', payload: msg };
    else { return '404 msg not found'; }
  }
  valid(args) {
    console.log("method : ",this.method);
    console.log("args :" , args)
    console.log(" args.a: ", args.a )
    return (args.a )  && this.method;
  }

}


module.exports = Input;
