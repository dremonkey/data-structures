var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

HashTable.prototype.resize = function (makeLarger) {
  // somewhere prior to this need to check size of the hash, probably in the insert and remove method
  //  if size > 75%, double the size.
  //  if size < 25%, half the size

  // if makeLarger
  //  create new hashtable, doubled in size
  //  map old values to new keys
  // else if makeSmaller
  //  create new hashtable, half size
  //  map old values to new keys
};
