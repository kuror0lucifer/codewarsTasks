// Maximum Triplet Sum (Array Series #7)

// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :

// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples

// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:

// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:

// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:

// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// Sample Tests:
// import { assert } from "chai";
// import { maxTriSum } from "./solution";

// describe("Basic tests", () => {
//   it("Testing for [3, 2, 6, 8, 2, 3]", () => assert.strictEqual(maxTriSum([3, 2, 6, 8, 2, 3]), 17));
//   it("Testing for [2, 9, 13, 10, 5, 2, 9, 5]", () => assert.strictEqual(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]), 32));
//   it("Testing for [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]", () => assert.strictEqual(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]), 18));
//   it("Testing for [-3, -27, -4, -2, -27, -2]", () => assert.strictEqual(maxTriSum([-3, -27, -4, -2, -27, -2]), -9));
//   it("Testing for [-14, -12, -7, -42, -809, -14, -12]", () =>
//     assert.strictEqual(maxTriSum([-14, -12, -7, -42, -809, -14, -12]), -33));
//   it("Testing for [-13, -50, 57, 13, 67, -13, 57, 108, 67]", () =>
//     assert.strictEqual(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]), 232));
//   it("Testing for [-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]", () =>
//     assert.strictEqual(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]), 41));
//   it("Testing for [-2, 0, 2]", () => assert.strictEqual(maxTriSum([-2, 0, 2]), 0));
//   it("Testing for [-2, -4, 0, -9, 2]", () => assert.strictEqual(maxTriSum([-2, -4, 0, -9, 2]), 0));
//   it("Testing for [-5, -1, -9, 0, 2]", () => assert.strictEqual(maxTriSum([-5, -1, -9, 0, 2]), 1));
// });

//The worst solution
export function maxTriSum(nums: number[]): number {
  let max: number = -Infinity;
  for (let i: number = 0; i < nums.length - 2; i++) {
    for (let j: number = i; j < nums.length - 1; j++) {
      if (nums[j] !== nums[i]) {
        for (let k: number = j; k < nums.length; k++) {
          if (nums[k] !== nums[j] && nums[k] !== nums[i]) {
            if (nums[i] + nums[j] + nums[k] > max)
              max = nums[i] + nums[j] + nums[k];
          }
        }
      }
    }
  }
  return max;
}
