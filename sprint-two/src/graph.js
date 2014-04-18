var Graph = function(){
  this._nodes = []; // Array of Node Values
  this._edges = []; // Array of Edge Objects
};

Graph.prototype.addNode = function(newNode, toNode){
  this._nodes.push(newNode);
  this._edges.push([]);

  if (toNode) {
    this.addEdge(newNode, toNode);
  }

  if (this._nodes.length === 2) {
    this.addEdge(newNode,this._nodes[0]);
  }
};

Graph.prototype.contains = function(node){
  return (this._nodes.indexOf(node) !== -1);
};

Graph.prototype.removeNode = function(node){
  var index = this._nodes.indexOf(node);

  for (var i=this._edges[index].length-1; i>=0;i--){
    if (this._edges[index] && this._nodes[this._edges[index]]){
      this.removeEdge(node, this._nodes[this._edges[index][i]]);
    }
  }
  if (this._nodes.length === 1) {
    this._edges.splice(0,1);
    this._nodes.splice(0,1);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var fromIndex = this._nodes.indexOf(fromNode);
  var toIndex = this._nodes.indexOf(toNode);

  return (this._edges[fromIndex].indexOf(toIndex) !== -1);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromIndex = this._nodes.indexOf(fromNode);
  var toIndex = this._nodes.indexOf(toNode);

  this._edges[toIndex].push(fromIndex);
  this._edges[fromIndex].push(toIndex);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  var fromIndex = this._nodes.indexOf(fromNode);
  var toIndex = this._nodes.indexOf(toNode);

  for (var i=0; i<this._edges[fromIndex].length; i++) {
    if (this._edges[fromIndex][i] === toIndex) {
      this._edges[fromIndex].splice(i, 1);
    }
  }

  for (var i=0; i<this._edges[toIndex].length; i++) {
    if (this._edges[toIndex][i] === fromIndex) {
      this._edges[toIndex].splice(i, 1);
    }
  }

  for (var i=this._edges.length-1; i>=0; i--) {
    if (this._edges[i] && this._edges[i].length === 0) {
      this._edges.splice(i, 1);
      this._nodes.splice(i,1);
    }
  }
};
