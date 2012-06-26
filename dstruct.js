/******
* dstruct.js
* Created by: Chien-Hung Chen
* http://github.com/chienhungchen/dstruct.js
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

(function(root, undefined){
	/******
	*	Queue - FIFO
	*	Methods implemented: enqueue, push, add; dequeue, pop, remove; clear; size, length, count; contains; isempty; peek, front; back
	*/
	root.Queue = function(){ 
		this.queue = []; //Initialize the queue
	};	
	root.Queue.prototype = {
		//enqueue adds the object on to the end, same as 'push' and 'add'
		enqueue: function(obj) { 
			this.queue.push(obj);
		},
		add: function(obj) { this.enqueue(obj); },
		push: function(obj) { this.enqueue(obj); },
		//dequeues an object and returns the object dequeued, same as 'pop' and 'remove'
		dequeue: function() {
			var obj = this.queue[0];
			this.queue = this.queue.slice(1);
			return obj;
		},
		pop: function() { this.dequeue(); },
		remove: function() { this.dequeue(); },
		//empty the queue, see: http://jsperf.com/emptying-arrays for arr.length = 0 vs arr = []
		clear: function() {
			this.queue = [];
		},
		//return size of the queue, same as 'length' and 'count'
		size: function() {
			return(this.queue.length);
		},
		length: function() { this.size(); },
		count: function() { this.size(); },
		//returns whether or not the queue contains obj
		contains: function(obj) {
			for(var i = 0; i < this.queue.length; i++) { 
				if(this.queue[i] === obj) 
					return true; 
			}
			return false;
		},
		//return whether or not the queue is empty
		isempty: function() {
			return this.queue.length === 0;
		},
		//returns the item at the front of the queue without dequeuing it, same as 'front'
		peek: function(){
			return this.queue[0];
		},
		//return the item at the end of the queue
		back: function(){
			return ((this.queue.length > 0) ? this.queue[this.queue.length - 1] : undefined);
		}
	};

	/******
	*	Stack - LIFO
	*	Methods implemented: push, add; pop; clear; size, length, count; contains; isempty; peek;
	*/
	root.Stack = function(){
		//initializing the stack
		this.stack = [];
	};
	root.Stack.prototype = {
		//push the obj on to the top of the stack
		push: function(obj) { 
			this.stack.push(obj); 
		},
		add: function(obj) { this.push(obj); },
		//pops an obj from the top of the stack and returns the object popped
		pop: function() { 
			return this.stack.pop(); 
		},
		//empty the stack, see: http://jsperf.com/emptying-arrays for arr.length = 0 vs arr = []
		clear: function() { 
			this.stack = [];
		},
		//return size of the stack
		size: function() {
			return (this.stack.length); 
		},
		length: function() { this.size; },
		count: function() { this.size; },
		//returns whether or not the stack contains obj
		contains: function(obj) {
			for(var i = 0; i < this.stack.length; i++) {
				if(this.stack[i] === obj) 
					return true;
			}
			return false;
		},
		//return whether or not the stack is empty
		isempty: function() { 
			return this.stack.length === 0;
		},
		//returns the item at the top of the stack without popping it
		peek: function() {
			return this.stack[this.stack.length-1];
		}
	};
})(this);