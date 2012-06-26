/******
*	Queue - FIFO
*	Methods implemented:
*		enqueue, push, add; dequeue, pop, remove; clear; size, length, count; contains; isempty; peek, front; back
*/
(function(root) {
	var Queue2 = function(){ var queue2 = []; alert('test');}
	Queue2.prototype.enqueue = function(obj) { queue2.push(obj); }
	
})(this);

function Queue(){

	//initializing the queue
	var queue = [];

	//enqueue and push adds the object on to the end
	this.enqueue = function(obj) { queue.push(obj); }
	this.push = this.enqueue;
	this.add = this.enqueue;
	
	//dequeues an obj and returns the object dequeued
	this.dequeue = function() {
		if (queue.length == 0)
			return undefined;
		var obj = queue[0];
		queue = queue.slice(1);
		return obj;
	}
	this.pop = this.dequeue;
	this.remove = this.dequeue;
	
	//empty the queue, there's a lot of discussion as to whether to use arr.length = 0 or arr = []; see: http://jsperf.com/emptying-arrays
	this.clear = function() { queue.length = []; }
	
	//return size of the queue
	this.size = function() { return (queue.length); }
	this.length = this.size;
	this.count = this.size;
	
	//returns whether or not the queue contains obj
	this.contains = function(obj) {
		for(o in queue) { if(queue[o] === obj) return true; }
		return false;
	}
	
	//return whether or not the queue is empty
	this.isempty = function() { return queue.length == 0; }

	//returns the item at the front of the queue without dequeuing it
	this.peek = function() { return ((queue.length > 0) ? queue[0] : undefined); }
	this.front = this.peek;
	
	//return the item at the end of the queue
	this.back = function() { return ((queue.length > 0) ? queue[queue.length - 1] : undefined); }
}