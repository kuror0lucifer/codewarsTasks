// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// Sample Tests:
// const { assert } = require("chai")

// describe("Basic tests", () => {

//   it("squareDigits(3212) should equal 9414", () => {
//     assert.strictEqual(squareDigits(3212), 9414);
//   });

//   it("squareDigits(2112) should equal 4114", () => {
//     assert.strictEqual(squareDigits(2112), 4114);
//   });

//   it("squareDigits(0) should equal 0", () => {
//     assert.strictEqual(squareDigits(0), 0);
//   });
// })

function squareDigits(num) {
  let res = "";
  num
    .toString()
    .split("")
    .map((x) => (res += Math.pow(+x, 2).toString()));
  return +res;
}
