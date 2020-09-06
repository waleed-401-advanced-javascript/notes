'use strict';

const minimist = require('minimist');

function Input() {
    console.log(process.argv)
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args);
}

Input.prototype.getMethod = function (method) {
  if (method.a || method.add) return this.getMsg(method.a || method.add);
  else{ return 'method error: Invalid method'; }
};

Input.prototype.getMsg = function (msg = '') {
  if (msg !== true) return { action: 'add', payload: msg };
  else { return '404 msg not found'; }
};

module.exports = Input;