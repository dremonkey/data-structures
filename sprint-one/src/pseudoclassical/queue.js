var Queue = function () {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here

  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.size = function () {
  var size = this.last - this.first;
  if (size < 0) size = 0;
  return size;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function () {
  var value = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return value;
};

var newQueue = new Queue();
