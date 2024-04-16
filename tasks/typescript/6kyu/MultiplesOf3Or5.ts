// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// function test(num: number, expected: number) {
//   assert.strictEqual(solution.Challenge.solution(num), expected)
// }

// describe("solution", function(){
//   it("should handle basic tests", function() {
//     test(10, 23);
//   });
// });

export class Challenge {
  static solution(number: number) {
    let sum: number = 0;
    Array.from({ length: number - 1 }, (_, i) => i + 1).map(x =>
      !(x % 3) || !(x % 5) ? (sum += x) : x
    );
    return sum;
  }
}
