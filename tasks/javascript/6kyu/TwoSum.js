// Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// Sample Tests:
// describe("Fixed Tests", function () {

//     const chai = require("chai"), { assert } = chai;

//     function doTest(numbers, targetSum) {
//       const [idx0, idx1] = twoSum(numbers.slice(), targetSum);
//       const num0 = numbers[idx0], num1 = numbers[idx1], actSum = num0 + num1;

//       const message = `for target sum = ${targetSum} and numbers = [${numbers.join(', ')}]\n`;

//       assert.notEqual(idx0, idx1,
//         message + `the two indices must be different, but got [${[idx0, idx1]}]\n`
//       );
//       assert.strictEqual(actSum, targetSum,
//         message + `array[${idx0}] = ${num0}, array[${idx1}] = ${num1}\n` +
//         `${num0} + ${num1} = ${actSum}\n`
//       );
//     }

//     it('Sample Tests', function () {
//       doTest([1, 2, 3], 4);
//       doTest([1234, 5678, 9012], 14690);
//       doTest([2, 2, 3], 4);
//       doTest([2, 3, 1], 3);
//     })
//   });

function twoSum(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) res = [i, j];
    }
  }
  return res;
}
