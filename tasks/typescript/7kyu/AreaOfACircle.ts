// Area of a Circle

// Complete the function which will return the area of a circle with the given radius.

// Returned value is expected to be accurate up to tolerance of 0.01.

// If the radius is not positive, throw Error.

// Example:

// circleArea(43.2673);     // returns 5881.248  (± 0.01)
// circleArea(68);          // returns 14526.724 (± 0.01)
// circleArea(0);           // throws Error
// circleArea(-1);          // throws Error

// Sample Tests:
// // See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";

// import { circleArea } from "./solution";

// describe("Sample tests", function() {
//   it("Test positive", function() {
//     assert.closeTo(circleArea(1), 3.141, 0.01)
//   });
//   it("Test examples", function() {
//     assert.closeTo(circleArea(43.2673),  5881.248, 0.01)
//     assert.closeTo(circleArea(68     ), 14526.724, 0.01)
//   });
//   it("Test zero", function() {
//     assert.throws(() => circleArea(0), Error)
//   });
//   it("Test negative", function() {
//     assert.throws(() => circleArea(-1), Error)
//   });
// });

export function circleArea(radius: number): number {
    if (radius < 1) throw new Error('');
    return radius**2 * Math.PI;
  }