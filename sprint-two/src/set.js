var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

// string approach to sets using JS arrays
var setPrototype = {};

setPrototype.add = function(item){
  this._storage = this._storage || {};
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};
