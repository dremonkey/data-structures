var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  if (this.children) {
    this.children.push(node);
  }
  else {
    this.children = [node];
  }
};

treeMethods.contains = function(target){
  if (this.value === target) return true;

  if (this.children) {
    var result = false;
    for (var i=0; i<this.children.length; i++) {
      if (!result) {
        result = this.children[i].contains(target);
      }
    }
    return result;
  }

  return false;
};

var extend = function (to,from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

