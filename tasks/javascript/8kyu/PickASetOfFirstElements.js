// pick a set of first elements

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// Sample Tests:
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     const arr = ['a', 'b', 'c', 'd', 'e'];
//     assert.sameOrderedMembers(first([...arr]   ),      ['a']);
//     assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);
//   });
// });

function first(arr, n) {
  return n ? (arr = arr.slice(0, n)) : n == 0 ? [] : [arr[0]];
}
