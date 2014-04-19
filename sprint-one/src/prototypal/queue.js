var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.last = 0;
  instance.first = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function() {
  var value = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return value;
};

queueMethods.size = function() {
  var length = this.last-this.first;
  if (length < 0) {
    length = 0;
  }
  return length;
};

var newQueue = makeQueue();
