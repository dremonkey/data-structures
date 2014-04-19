var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // index of first item
  var first = 0;
  var last = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  instance.dequeue = function(){
    var value = storage[first];
    delete storage[first];
    first++;
    return value;
  };

  instance.size = function(){
    var size = last - first;
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return instance;
};

var MakeQueue = makeQueue();
