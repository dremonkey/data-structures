var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  this.length && this.length--;
  var value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
};

var newStack = new Stack();
