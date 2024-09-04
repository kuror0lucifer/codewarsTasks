// Minimum Steps (Array Series #6)

// Task

// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:

// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples

// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:

// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// Explanation:

// We add two smallest elements (4 + 2), their sum is 6 .

// Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

// Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

// Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
// Explanation:

// We add two smallest elements (19 + 17), their sum is 36 .

// Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

// We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .

// Expected Time Complexity O(n Log n)

// Sample Tests:
// import { assert } from "chai";
// import { minimumSteps } from "./solution";

// describe("Basic tests", () => {
//   it("minimumSteps([4, 6, 3], 7)", () => assert.strictEqual(minimumSteps([4, 6, 3], 7), 1));
//   it("minimumSteps([10, 9, 9, 8], 17)", () => assert.strictEqual(minimumSteps([10, 9, 9, 8], 17), 1));
//   it("minimumSteps([8, 9, 10, 4, 2], 23)", () => assert.strictEqual(minimumSteps([8, 9, 10, 4, 2], 23), 3));
//   it("minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)", () =>
//     assert.strictEqual(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8));
//   it("minimumSteps([4, 6, 3], 2)", () => assert.strictEqual(minimumSteps([4, 6, 3], 2), 0));
// });

export function minimumSteps(nums: number[], value: number) {
    nums.sort((a, b) => a - b)
    let res: number = 0
    for (let i: number = 0; i < nums.length; i++) {
      res += nums[i]
      if (res >= value) return i
    }
  }