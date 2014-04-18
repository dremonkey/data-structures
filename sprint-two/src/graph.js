var Graph = function(){
  var numNodes = 0;
  var numEdges = 0;
  var _nodes = []; // Array of Node Values
  var _edges = []; // Array of Edge Objects
};

Graph.prototype.addNode = function(newNode, toNode){
  if (numNodes === 0) {
    this.edges.push([]);
  }
  this._nodes.push(newNode);
  numNodes++;

  if (toNode) {

    this._edges[]
  }
};

Graph.prototype.contains = function(node){

};

Graph.prototype.removeNode = function(node){


};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};
