var makeBinarySearchTree = function(value){
    var instance = Object.create(makeBinarySearchTree.methods);

    instance.value = value;
    instance.left = null; // smaller BST
    instance.right = null; // larger BST
    instance.depth = [0,0];

    return instance;
};

makeBinarySearchTree.methods = {};
makeBinarySearchTree.methods.insert = function(value) {
 // if value < node
 //   if node.left exists
 //     node.left.insert(value)
 //   else
 //     create node
 //     set left equal to node
 // else
 //   repeat same steps for right

  if (value > this.value) {
    this.depth[1]++;
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = makeBinarySearchTree(value);
    }
  } else {
    this.depth[0]++;
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = makeBinarySearchTree(value);
    }
  }
  console.log(this);
  return false;
};

makeBinarySearchTree.methods.contains = function(value) {
  // if value == node.value return true
  // else if value > node.value
  //  if node.right doesn't exist, return false
  //  else go to node.right and return node.right.contains(value)
  // else if  value < node.value
  //  if node.left doesn't exist, return false
  //  else go to node.left and return node.left.contains(value)
  // return null;

  if (value === this.value) return true;
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
  else {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
};

makeBinarySearchTree.methods.depthFirstLog = function(cb) {
  // node.value = cb(node.value)
  // if left exists
  //   node.left.depthFirstLog(cb)
  // if right exists
  //   node.right.depthFirstLog(cb)

  this.value = cb(this.value);
  if (this.left) this.left.depthFirstLog(cb);
  if (this.right) this.right.depthFirstLog(cb);

  return null;
};

makeBinarySearchTree.methods.breadthFirstLog = function (cb) {
  var toDo = [];

  toDo.push(this);

  while(toDo.length > 0) {
    if (toDo[0].left) {
      toDo.push(toDo[0].left);
    }
    if (toDo[0].right) {
      toDo.push(toDo[0].right);
    }
    cb(toDo[0].value);
    toDo.shift();
  }

};
