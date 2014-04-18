var HashTable = function(limit){
  this._limit = limit || 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var value = this._storage.get(i) || [];
  value.push([k,v]);
  this._storage.set(i, value);
  this._size++;

  if (this._size >= 0.75*this._limit) {
    this.resize(true);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var value;
  var values = this._storage.get(i);

  if (values) {
    if (values.length > 1) {
      for(var count=0;count<values.length;count++) {
        if (k === values[count][0]) value = values[count];
      }
    } else {
      if (k === values[0][0]) {
        value = values[0];
      }
    }
  }

  return value && value[1] || null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var values = this._storage.get(i);

  if (values) {
    if (values.length > 1) {
      for (var count=values.length-1; count>=0;count--) {
        if (k===values[count][0]) {
          values.splice(count,1);
        }
      }
    } else {
      this._storage.set(i, null);
    }
  }

  this._size--;

  if (this._size < 0.25*this._limit) {
    this.resize(false);
  }
};

HashTable.prototype.resize = function (makeLarger) {
  // somewhere prior to this need to check size of the hash, probably in the insert and remove method
  //  if size > 75%, double the size.
  //  if size < 25%, half the size

  var oldStorage = this._storage;
  var limit;
  var newStorage;

  // fix for changes in storage structure
  if (makeLarger) {
    limit = this._limit*2;
    newStorage = makeLimitedArray(limit);

    oldStorage.each(function (val, index, collection) {
      if (val && val[index]) {
        var i = getIndexBelowMaxForKey(val[index][0],limit);
        newStorage.set(i, val);
      }
    });
  } 
  else {
    limit = Math.ceil(this._limit/2);
    newStorage = makeLimitedArray(limit);

    oldStorage.each(function(val, index, collection) {
      if (val && val[index]) {
        var i = getIndexBelowMaxForKey(val[index][0], limit);
        newStorage.set(i, val);
      }
    });
  }

  this._storage = newStorage;
  this._limit = limit;

};
