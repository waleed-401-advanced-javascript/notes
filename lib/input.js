'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    console.log('args======>', args)
    this.actions = this.getaction(args);
    console.log('actions =====> ', this.actions)

    this.valid(args)
  }

  getaction(args) {
    if ((args.a || args.add) && args.c) return this.getnotes(args.a || args.add, args.c);
    else if (args.list) {
      return { action: 'list', category: args.list || undefined }
    }
    else if (args.delete) {
      return { action: 'delete', Id: args.delete }
    }
    else { return 'error: Invalid action'; }
  }
  getnotes(notes = '  ', c) {
    console.log('get notes +===', notes = ' ', c)
    if (notes !== true) return { action: 'add', payload: notes, category: c };
    else { return 'invalid notes'; }
  }

  valid(args) {

    return (args.a || args.add) && this.actions

  }



}

module.exports = Input;
