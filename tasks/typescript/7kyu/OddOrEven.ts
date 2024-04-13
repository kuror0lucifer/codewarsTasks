// Odd or Even?

// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// Sample Tests:
// // See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";
// import { oddOrEven } from "./solution";

// // TODO Add your tests here
// describe('Fixed tests', () => {
//   it('Edge tests', () => {
//     assert.equal(oddOrEven([0]), 'even')
//     assert.equal(oddOrEven([1]), 'odd')
//     assert.equal(oddOrEven([]), 'even')
//   });

//   it('Even tests', () => {
//     assert.equal(oddOrEven([0, 1, 5]), 'even')
//     assert.equal(oddOrEven([0, 1, 3]), 'even')
//     assert.equal(oddOrEven([1023, 1, 2]), 'even')
//   });

//   it('Negative Even tests', () => {
//     assert.equal(oddOrEven([0, -1, -5]), 'even')
//     assert.equal(oddOrEven([0, -1, -3]), 'even')
//     assert.equal(oddOrEven([-1023, 1, -2]), 'even')
//   });

//   it('Odd tests', () => {
//     assert.equal(oddOrEven([0, 1, 2]), 'odd')
//     assert.equal(oddOrEven([0, 1, 4]), 'odd')
//     assert.equal(oddOrEven([1023, 1, 3]), 'odd')
//   });

//   it('Negative Odd tests', () => {
//     assert.equal(oddOrEven([0, -1, 2]), 'odd')
//     assert.equal(oddOrEven([0, 1, -4]), 'odd')
//     assert.equal(oddOrEven([-1023, -1, 3]), 'odd')
//   });
// });

export function oddOrEven(array: number[]) {
  let sum: number = 0;
  array.map(x => (sum += x));
  return sum % 2 ? "odd" : "even";
}
