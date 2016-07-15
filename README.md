# lqueue
Create queue using linked list. Support forEach, enqueue,dequeue,clear,enqueue All, dequeueAll
A Simple Queue using Linked Link Datastructure
=========================================

When I was using javascript Array and calling array.shift() method to get first element and It was terrible if array contains more than 100,000 elements.

    var start = new Date().getTime()
    for(var i = 0; i< 100000; i++){
     array.shift();
    }
    var duration = new Date().getTime() - start;// duration is so large, greater than 3 minutes

I used Linked List to improve performance, and apply it for 1000,000 elements.

    var start = new Date().getTime()
    for(var i = 0; i< 1000000; i++){
     queue.dequeue();
    }
    var duration = new Date().getTime() - start;// duration  = 8 for 1000000 elements


## Example: Queues using linked list. Visit here to test: https://tonicdev.com/5788a641565456130014d2c1/5788a641565456130014d2c2

    var LQueue = require('linked-queue')
    var queue = new LQueue()
    queue.length === 0 //=> true
    queue.enqueue(10)
    queue.length  //=> 1
    queue.first() ; // => 10
    queue.last() ; // => 10
    queue.enqueueAll([11,12]); // queues elements: 10,11,12
    queue.fist(); //=> 10
    queue.last();// => 12
    queue.length;// => 3

    queue.dequeue()// return 10, queus elements: 11,12
    queue.forEach(function(data){
        console.log(data);
    });
    //=> print: 11 12
    queue.dequeueAll(function(data){
        console.log(data);
    });
    //=> print: 11 12
    queue.length //return 0
    queue.isEmpty(); //return true;
    queue.enqueueAll([1,2]);
    queue.length;//return 2
    queue.clear();
    queue.length// return 0


## API

### `queue = new LQueue()`

### `queue.enqueue(value)`
Push a value on the end.

### `queue.enqueueAll(array)`
Push all values of array on the end of queue.

### `value = queue.dequeue()`
Remove a value off the beginning.

### `queue.dequeueAll(callbackfn)`
Remove all values off the beginning. Each dequeued data will be call by callbackFn(data)

### `queue.length`
return size of queue.

### `value = deque.forEach(callbackfn)`
Get all values of queues without removing. Each data will be call by callbackFn(data)

### `value = queue.last()`
Examine the value of the end without removing it.

### `value = queue.first()`
Examine the value of the beginning without removing it.

### `queue.clear()`
Remove all entries.


## About the Code

I was convinced by [a blog posting](http://www.dreamincode.net/forums/topic/10157-data-structures-in-c-tutorial/)
