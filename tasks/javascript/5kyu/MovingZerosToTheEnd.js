// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Sample Tests:
// const {assert, config} = require("chai");
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
//   });
// });

function moveZeros(arr) {
  let withoutZeros = [];
  let zeros = [];
  arr.map((x) => (x === 0 ? zeros.push(x) : withoutZeros.push(x)));
  return withoutZeros.concat(zeros);
}
