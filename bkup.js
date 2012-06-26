/******
* dstruct.js
* Created by: Chien-Hung Chen
* Created with the intent of offering special data structures for javascript users
*/

/******
*	Binary Search Tree
*	Methods implemented:
*		enqueue, push, add; dequeue, pop, remove; clear; size, length, count; contains; isempty; peek, front; back
*/
var bstNode = function(v, l, r){
	this.value = v;
	this.left = l;
	this.right = r;
}
function BinarySearchTree(rootval){
	var root;
	if(rootval == undefined || rootval == undefined)
		root = new bstNode(null, null, null);
	else
		root = new bstNode(rootval, null, null);
		
	//returns the root of the tree
	this.getroot = function() { return root; }
	
	//sets the root of the tree
	this.setroot = function(r) { root = r; }
}

/******
*	Queue - FIFO
*	Methods implemented:
*		enqueue, push, add; dequeue, pop, remove; clear; size, length, count; contains; isempty; peek, front; back
*/
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

/******
*	Stack - LIFO
*	Methods implemented:
*		push, add; pop; clear; size, length, count; contains; isempty; peek;
*/
function Stack(){

	//initializing the queue
	var stack = [];

	//push the obj on to the top of the stack
	this.push = function(obj) { stack.push(obj); }
	this.add = this.push;
	
	//pops an obj from the top of the stack and returns the object popped
	this.pop = function() { return stack.pop(); }
	
	//empty the stack, there's a lot of discussion as to whether to use arr.length = 0 or arr = []; see: http://jsperf.com/emptying-arrays
	this.clear = function() { stack.length = 0; }
	
	//return size of the stack
	this.size = function() { return (stack.length); }
	this.length = this.size;
	this.count = this.size;
	
	//returns whether or not the stack contains obj
	this.contains = function(obj) {
		for(o in stack) { if(stack[o] === obj) return true; }
		return false;
	}
	
	//return whether or not the stack is empty
	this.isempty = function() { return stack.length == 0; }

	//returns the item at the top of the stack without popping it
	this.peek = function() { return ((stack.length > 0) ? stack[stack.length-1] : undefined); }
}
