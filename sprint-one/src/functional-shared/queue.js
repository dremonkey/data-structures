var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};

  // index of first item
  instance.first = 0;
  instance.last = 0;

  extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.size = function () {
  var size = this.last - this.first;
  if (size < 0) size = 0;
  return size;
};

queueMethods.dequeue = function () {
  var value = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return value;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var newQueue = makeQueue();
