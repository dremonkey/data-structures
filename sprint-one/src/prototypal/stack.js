var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;
  return instance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.length;
};

stackMethods.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function () {
  if (this.length > 0) {
    this.length--;
  }

  var value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
};

var newStack = makeStack();
