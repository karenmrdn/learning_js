"use strict";

/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

/* MY SOLUTION */
// const sumPlusMinus = (arr) => {
//   return arr.reduce(
//     (obj, num) => {
//       if (num >= 0) {
//         obj.plus += num;
//       } else {
//         obj.minus += num;
//       }
//       return obj;
//     },
//     { plus: 0, minus: 0 }
//   );
// };

/* AUTHOR'S SOLUTION */
const sumPlusMinus = (arr) => {
  return arr.reduce(
    (acc, elem) => ({
      plus: elem >= 0 ? acc.plus + elem : acc.plus,
      minus: elem < 0 ? acc.minus + elem : acc.minus,
    }),
    { plus: 0, minus: 0 }
  );
};

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
