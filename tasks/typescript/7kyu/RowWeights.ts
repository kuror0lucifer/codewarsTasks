// Row Weights

// Scenario

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes

// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples

// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:

// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:

// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:

// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// Sample Tests:
// import { assert } from "chai";
// import { rowWeights } from "./solution";

// describe("Basic tests", () => {
//   it("Testing for [80]", () => assert.deepEqual(rowWeights([80]), [80, 0]));
//   it("Testing for [100, 50]", () => assert.deepEqual(rowWeights([100, 50]), [100, 50]));
//   it("Testing for [50, 60, 70, 80]", () => assert.deepEqual(rowWeights([50, 60, 70, 80]), [120, 140]));
//   it("Testing for [13, 27, 49]", () => assert.deepEqual(rowWeights([13, 27, 49]), [62, 27]));
//   it("Testing for [70, 58, 75, 34, 91]", () => assert.deepEqual(rowWeights([70, 58, 75, 34, 91]), [236, 92]));
//   it("Testing for [29, 83, 67, 53, 19, 28, 96]", () => assert.deepEqual(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]));
//   it("Testing for [0]", () => assert.deepEqual(rowWeights([0]), [0, 0]));
//   it("Testing for [100, 51, 50, 100]", () => assert.deepEqual(rowWeights([100, 51, 50, 100]), [150, 151]));
//   it("Testing for [39, 84, 74, 18, 59, 72, 35, 61]", () =>
//     assert.deepEqual(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]));
//   it("Testing for [0, 1, 0]", () => assert.deepEqual(rowWeights([0, 1, 0]), [0, 1]));
// });

export function rowWeights(arr: number[]) {
  let team1: number = 0,
    team2: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (i % 2) team2 += arr[i];
    else team1 += arr[i];
  }
  return [team1, team2];
}
