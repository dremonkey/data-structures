var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

// add child using array
treeMethods.addChild = function(value){
  var node = makeTree(value);
  if (this.children) {
    this.children.push(node);
  }
  else {
    this.children = [node];
  }
};

// contains uses recursive call for each child node
// base case: if node.children exists
// bubbles up: true/false if target is found
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

