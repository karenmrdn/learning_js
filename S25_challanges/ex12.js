"use strict";

/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

var a = [1, 2, 3];

var b;

//Copy array here
b = [...a];

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
