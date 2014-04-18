// Andre smarter solution

var Graph = function(){
 this._nodes = {};
 this._numOfNodes = 0;
 this._firstNode = null;
};

Graph.prototype.addNode = function(newNode, toNode){
 var node = new Node(newNode);

 // add the new node to this._nodes
 // NOTE this assumes that newNode is unique...
 // TODO use a hashing function to hash the node object to ensure non-overlapping keys
 this._nodes[newNode] = node;

 // if there is a toNode or there is only one other node in the list
 // then add a conection between the nodes
 if (toNode || this._numOfNodes === 1) {
   toNode = toNode || this._firstNode;
   this.addEdge(newNode, toNode);
 }

 // increment numOfNodes
 this._numOfNodes++;

 // if this is the first node, save it
 if (this._numOfNodes === 1) {
   this._firstNode = newNode;
 }
};

/**
* @param node (string) id/key of a node
*/
Graph.prototype.contains = function(node){
 return this._nodes[node] !== undefined;
};

/**
* @param node (string) id/key of a node
*/
Graph.prototype.removeNode = function(node){
 var nodeObj = this._nodes[node];

 // remove references to this node from all connected nodes
 var edges = nodeObj.getEdges();
 if (edges) {
   for(var nodeKey in edges) {
     this.removeEdge(nodeKey, node);
   }
 }

 // after all connections are removed, delete the node
 delete this._nodes[node];
 this._numOfNodes--;
};

/**
* @param fromNode (string) id/key of a node
* @param toNode (string) id/key of a node
*/
Graph.prototype.getEdge = function(fromNode, toNode){
 console.log('Graph.getEdge', fromNode, toNode);
 var nodeObj = this._nodes[fromNode];
 return nodeObj.hasEdge(toNode);
};

/**
* @param fromNode (string) id/key of a node
* @param toNode (string) id/key of a node
*/
Graph.prototype.addEdge = function(fromNode, toNode){
 var fromNodeObj = this._nodes[fromNode];
 var toNodeObj = this._nodes[toNode];

 fromNodeObj.addEdge(toNode);
 toNodeObj.addEdge(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
 var fromNodeObj = this._nodes[fromNode];
 var toNodeObj = this._nodes[toNode];

 fromNodeObj.removeEdge(toNode);
 toNodeObj.removeEdge(fromNode);

 if (!fromNodeObj.hasEdges()) this.removeNode(fromNode);
 if (!toNodeObj.hasEdges()) this.removeNode(toNode);
};

var Node = function (value) {
 this._value = value;
 this._edges = null;
 this._numOfEdges = 0;
};

Node.prototype.hasEdge = function (toNode) {
 return this._edges[toNode] !== undefined;
};

Node.prototype.hasEdges = function () {
 return this._numOfEdges > 0;
};

Node.prototype.getEdges = function () {
 return this._edges;
};

Node.prototype.removeEdge = function (toNode) {
 if (this._edges[toNode]) {
   delete this._edges[toNode];
   this._numOfEdges--;
 }
};

Node.prototype.addEdge = function (toNode, distance) {
 distance = distance || 1; 
 this._edges = this.edges || {};
 this._edges[toNode] = distance;
 this._numOfEdges++;
};