'use strict';

// const minimist = require('minimist');

// function Input() {
//     console.log(process.argv)
//   const args = minimist(process.argv.slice(2));
//   this.method = this.getMethod(args);
// }

// Input.prototype.getMethod = function (method) {
//   if (method.a || method.add) return this.getMsg(method.a || method.add);
//   else{ return 'method error: Invalid method'; }
// };

// Input.prototype.getMsg = function (msg = '') {
//   if (msg !== true) return { action: 'add', payload: msg };
//   else { return '404 msg not found'; }
// };

// module.exports = Input;

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args.m);

  }

  getMethod(method) {
    if (method.a || method.add) return this.getMsg(method.a || method.add);
  else{ return 'method error: Invalid method'; }
  }

  getURL(msg = '') {
    if (msg !== true) return { action: 'add', payload: msg };
    else { return '404 msg not found'; }
  }

  // -b
  getBody(body = undefined) {
    try {
      return JSON.parse(body);
    } catch(e) {
      return body;
    }
  }
  
  getHeaders() {

  }

  valid() {
    console.log("this.url : ",this.url);
    console.log(" this.method : ", this.method)
    return this.url && this.method;
  }

}


module.exports = Input;