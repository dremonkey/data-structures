 var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // check if head is null
    // if null (empty LL)
    //   point head to a new node
    //   point tail to head
    // else
    //   point last node (current tail) to new node
    //   point tail to newly created tail
    // assign tail value to input value
    var node = makeNode(value);

    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function(){
    // only run if it's not null
    // if 1: store head value, point head to null, point tail to null, return value
    // everything else: store head's value, point head to head.next, return value

    var result;

    if (list.head === null) {
      return null
    }

    if (list.head === list.tail) {
      result = list.head.value;
      list.head = null;
      list.tail = null;
    } else {
      result = list.head.value;
      list.head = list.head.next;
    }

    return result;

  };

  list.contains = function(target, node){
    // start at node or the head
    // check to see if currentNode.value == target
    //  if yes, return true
    //  if it does not, recurse until currentNode.next is null
    // return false

    node = node || list.head;
    if (node.value === target) {
      return true;
    }
    else {
      if (node.next !== null) {
        return list.contains(target, node.next);
      }
    }

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
