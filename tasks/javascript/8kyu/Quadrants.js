// Quadrants

// Task

// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples

// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

// Sample Tests:
// const {assert} = require("chai");
// describe("Fixed", () => {
//   const tests = {
//     Example: [
//       [1, 2, 1], [3, 5, 1], [-10, 100, 2],
//       [-1, -9, 3], [19, -56, 4]
//     ]
//   };
//   for (var k of Object.keys(tests)) {
//     it(k, () => {
//       for (var t of tests[k]) {
//         assert.strictEqual(quadrant(t[0], t[1]), t[2]);
//       }
//     });
//   }
// });

function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  } else {
    return 0;
  }
}
