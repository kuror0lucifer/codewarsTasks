// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example

// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

// Sample Tests:
// import {predictAge} from "./solution";
// import {assert} from "chai";

// describe("predictAge", function() {
//   it("Sample tests", function() {
//     assert.equal(predictAge(65,60,75,55,60,63,64,45), 86);
//     assert.equal(predictAge(32,54,76,65,34,63,64,45), 79);
//   });
// });

export function predictAge(...ages: number[]): number {
  const sum: number = ages.reduce((acc, age) => acc + age * age, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}
