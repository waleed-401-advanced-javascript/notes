'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args);
  }

  getMethod(method) {
    if (method.a || method.add) return this.getMsg(method.a || method.add, method.category);
    if (method.list || method.l) return { action: 'list', category: method.list || method.l };
    if (method.delete || method.d) return { action: 'delete', id: method.delete || method.d};
    if (method.update || method.u) return this.newMsg( method.m, method.u || method.update);
    else { return 'method error: i cant read your mind man :P write the method u want to use'; }
  }

  getMsg(msg = '', msgCategory) {
    if (msg !== true && msg != '') return { action: 'add', payload: msg, category: msgCategory };
    else { return 'msg error: ops u forget to write msg'; }
  }

  newMsg(msg = '', id){
    if (msg !== true && msg != '') return { action: 'update', payload: msg, id: id };
    else { return 'msg error: ops u forget to write the new msg'; }
  }
}

module.exports = Input;