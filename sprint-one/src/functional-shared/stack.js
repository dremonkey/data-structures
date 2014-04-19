var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  instance.length = 0;
  instance.storage = {};

  extend(instance,stackMethods);

  return instance;

};

var stackMethods = {};

stackMethods.size = function(){
  return this.length;
};

stackMethods.pop = function(){
  this.length && this.length--;
  var value = this.storage[this.length];
  delete this.storage[this.length];
  return value;
};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

var extend = function(a, b) {
  for (var i in b) {
    a[i] = b[i];
  }
};

var newStack = makeStack();
