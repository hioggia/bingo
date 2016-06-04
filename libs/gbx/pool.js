gbx.define(function(){
/*
* Copyright (c) 2012 Brian "Beej Jorgensen" Hall <beej@beej.us>
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
* CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
* SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Create a new object pool of a certain class
 *
 * @param Cls the class
 */
function ObjectPool(Cls) {
	this.cls = Cls;

	// metrics for tracking internals
	this.metrics = {};
	this._clearMetrics();

	// [private] the objpool stack
	this._objpool = [];
};

/**
 * Allocate a new object from the pool
 *
 * @return the object
 */
ObjectPool.prototype.alloc = function alloc() {

	var obj;

	if (this._objpool.length == 0) {
		// nothing in the free list, so allocate a new object
		obj = new this.cls();

		this.metrics.totalalloc++;

	} else {
		// grab one from the top of the objpool
		obj = this._objpool.pop();

		this.metrics.totalfree--;
	}

	return obj;
}

/**
 * Return an object to the object pool
 */
ObjectPool.prototype.free = function(obj) {
	var k;

	// fix up the free list pointers
	this._objpool.push(obj);

	this.metrics.totalfree++;
}

/**
 * Allow collection of all objects in the pool
 */
ObjectPool.prototype.collect = function(cls) {
	// just forget the list and let the garbage collector reap them
	this._objpool = []; // fresh and new

	// but we might have allocated objects that are in use/not in
	// the pool--track them in the metrics:
	var inUse = this.metrics.totalalloc - this.metrics.totalfree;
	this._clearMetrics(inUse);
}

/**
 * [private] Clear internal metrics
 */
ObjectPool.prototype._clearMetrics = function(allocated) {
	this.metrics.totalalloc = allocated || 0;
	this.metrics.totalfree = 0;
}

return ObjectPool;

});