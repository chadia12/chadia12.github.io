"use strict";
/**es-lint disable */

//1.Explain why do we want sometimes to use setImmediate instead of using setTimeout?
//because of cycle it's easy to manipulate setImmediate than manupale setTimeout.
 // we now that because of I/O cycle the Immediate is always executed first

//2.Explain the difference between process.nextTick and setImmediate?
/*
The nextTick() will always has higher priority, is not technically part of the event loop. instead it will processed after the current operation is completed, regardless of the current phase of the event loop.
SetImmediate: will execute once the tick is called only.
process.nextTick: API provided natively by node.js
setImmediate: provide by libuv
*/

//3.Name 10 global modules/methods available in Node environment.
/** 10 global modules available in node environment
 * module, process, buffer, require, global, setTimeout, setIntervale, __filename, __dirname, URL
 
 */

