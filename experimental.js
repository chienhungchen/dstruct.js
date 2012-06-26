(function (root, undefined) {
    var doesArrayContainValue = function (array, value) {
        if (typeof array.indexOf === 'function') {
            return array.indexOf(value) >= 0;
        } else {
            // Unfortunately, "for-in" loops in Javascript are not as useful as
            // they are in other languages, and in this scenario should be avoided.
            // See: http://stackoverflow.com/questions/500504/javascript-for-in-with-arrays
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) { return true; }
            }
            return false;
        }
    };

    root.Structures = (function(Structures) {
        Structures.Stack = function (array) {
            this._stack = array || [];
        };
        
        Structures.Stack.prototype = {
            push: function (obj) {
                this._stack.push(obj);
                return this;
            },
            
            pop: function () {
                return this._stack.pop();
            },
            
            peek: function () {
                // Will return 'undefined' if index is negative (empty array)
                return this._stack[this._stack.length - 1];
            },
            
            clear: function () {
                // See http://jsperf.com/emptying-arrays for performance
                // Personal tests on Chrome 17 and FF 10.0.2/11 show this method to be fastest.
                // IE9 is faster when setting length to 0, but I'm biased towards Chrome/FF,
                // and this is the more intuitive approach when reading code, anyways.
                this._stack = [];
                return this;
            },
            
            size: function () {
                return this._stack.length;
            },
            
            contains: function (obj) {
                return doesArrayContainValue(this._stack, obj);
            },
            
            isEmpty: function () {
                return this._stack.length === 0;
            }
        };
        
        Structures.Queue = function (array) {
            this._queue = array || [];
        };
        
        Structures.Queue.prototype = {
            push: function (obj) {
                this._queue.push(obj);
                return this;
            },
            
            pop: function () {
                var obj = this._queue[0]; // 'undefined' if empty array
                this._queue = this._queue.slice(1); // 'slice' will return empty array when called on an empty array
                return obj;
            },
            
            peek: function () {
                return this._queue[0]; // 'undefined' if empty array
            },
            
            clear: function () {
                this._queue = [];
                return this;
            },
            
            size: function () {
                return this._queue.length;
            },
            
            contains: function (obj) {
                return doesArrayContainValue(this._queue, obj);
            },
            
            isEmpty: function () {
                return this._queue.length === 0;
            }
        };
        
        return Structures;
    })(root.Structures || {});
})(this);