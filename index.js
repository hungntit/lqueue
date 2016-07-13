var LQueue = function(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LQueue.prototype.enqueue = function(data){
  var tmp = new Node(data);
  tmp.data = data;
  tmp.next = null;
  this.length ++;
  if(this.head == null){
    this.tail = this.head = tmp;
    return;
  }
  this.tail.next = tmp;
  this.tail = this.tail.next;
}

LQueue.prototype.enqueueAll = function(list){
  for(var i =0;i < list.length;i++){
    this.enqueue(list[i]);
  }
}

LQueue.prototype.dequeue = function(){
  if(this.head == null){
    return null;
  }
  this.length --;
  var data = this.head.data;
  var tmp = this.head;
  this.head = this.head.next;
  if(this.head == null){
    this.tail = null;
  }
  tmp.next  = null;
  return data;

}

LQueue.prototype.dequeueAll = function(fn){
  while(this.head != null){
    fn(this.dequeue());
  }
}

LQueue.prototype.first = function(){
  if(this.head != null){
    return this.head.data
  }
  return null;
}

LQueue.prototype.last = function(){
  if(this.tail != null){
    return this.tail.data
  }
  return null;
}

LQueue.prototype.isEmpty = function(){
  return this.length ===0;
}

LQueue.prototype.clear = function(data){
  if(this.head == null) return;
  var tmp = null;
  while(this.head != null){
      tmp=this.head;
      this.head = this.head.next;
      tmp.next = null;
      this.length --;
  }
  this.tail = null;
}
LQueue.prototype.forEach = function(fn){
  var tmp = this.head;
  while(tmp != null){
    fn(tmp.data);
    tmp = tmp.next
  }
}

var Node = function(data){
  this.data = data;
  this.next = null;
}
module.exports = LQueue;
