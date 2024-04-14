// JavaScript Array Filter

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// Sample Tests:
// import { assert, config } from "chai";

// import { getEvenNumbers } from "./solution";

// config.truncateThreshold = 0

// describe("Fixed tests", function() {
//   it("should return an empty array if there are no even numbers", function() {
//       assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
//       assert.deepEqual(getEvenNumbers([1,2]), [2])
//       assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
//       assert.deepEqual(getEvenNumbers([13,15]), [])
//       assert.deepEqual(getEvenNumbers([1,3,9]), [])
//   });
// });

export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter(x => !(x % 2));
};
