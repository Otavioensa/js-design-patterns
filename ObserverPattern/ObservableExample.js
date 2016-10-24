
  var util = require('util');
  var EventEmitter = require('events').EventEmitter;

  function MyObservable() {
    EventEmitter.call(this);
  }

  MyObservable.prototype.hello = function (name) {
    this.emit('hello', name);
  };
  

  util.inherits(MyObservable, EventEmitter);

  module.exports = MyObservable;
