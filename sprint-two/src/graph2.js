var Graph = function(){
  this._nodeCount = 0;
  this._nodes = [];
  this._edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){

  if (!toNode && this._nodes.length === 1) {
    toNode = this._nodes[0];
  }

  this.addEdge(newNode, toNode);
  this._nodes.push(newNode);
  this._nodeCount++
};

Graph.prototype.contains = function(node){
  return this._nodes.indexOf(node) !== -1;
};

Graph.prototype.removeNode = function(node){

  // get all edges that node is pointing to
  var edges = this._edges[node];

  // loop through all attached edges to remove the node to delete
  if (edges) {
    for(var i=0; i<edges.length; i++) {
      if (edges[i] === node) {
        delete edges[i];
      }
    }

    delete this._edges[node];
  }


  // remove the node
  var index = this._nodes.indexOf(node);
  if (index !== -1) {
    delete this._nodes[index];
    this._nodeCount--;
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this._edges[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (toNode) {
    // ensure bidirectional edges
    if (this._edges[fromNode]) {
      this._edges[fromNode].push(toNode);
    }
    else {
      // if tonode exists
      this._edges[fromNode] = [toNode];
    }


    if (this._edges[toNode]) {
      this._edges[toNode].push(fromNode);
    }
    else {
      this._edges[toNode] = [fromNode];
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var idx1 = this._edges[fromNode].indexOf(toNode);
  var idx2 = this._edges[toNode].indexOf(fromNode);

  delete this._edges[fromNode][idx1];
  delete this._edges[fromNode][idx2];

  console.log(this._edges);
};

// var Node = function (value) {
//   this._edges = [];
//   this._value = undefined;
// }
