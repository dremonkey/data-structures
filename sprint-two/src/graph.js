var Graph = function(){
  var _nodes = []; // Array of Node Objects
  var _edges = []; // Array of Edge Objects
};

Graph.prototype.addNode = function(newNode, toNode){

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

var Node = function (value) {
  this._value = undefined;
};

var Edge = function () {
  this._connections = [];
};

// [ Node(5) Node(2) Node(10) Node(8) ]
// [ [1, 3] [0, 2, 3] [1, 3] [0, 1, 2] ]

// [ Node(5) Node(2) Node(10) Node(8) Node(1) ]
// [ [1, 3] [0, 2, 3] [1, 3, 4] [0, 1, 2] [2] ]
