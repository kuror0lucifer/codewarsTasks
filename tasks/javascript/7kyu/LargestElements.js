// Largest Elements

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Sample Tests:
// describe("Tests suite", function () {

//     const chai = require('chai');
//     chai.config.truncateThreshold = 0;
//       const { deepEqual } = chai.assert;

//       function doTest(n, array, expected) {
//           const log = `for n = ${n} and array = [${array.join(', ')}]\n`;
//           const actual = largest(n, array);
//           deepEqual(actual, expected, log);
//       }

//       it("Fixed tests", function () {
//           doTest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]);
//           doTest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []);
//           doTest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]);
//           doTest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]);
//           doTest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63]);
//           doTest(0, [1, 2, 3, 4, 8, 7, 6, 5], []);
//       });
//   });

function largest(n, array) {
  return array.sort((a, b) => a - b).slice(array.length - n);
}
