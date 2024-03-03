// Numbers to Letters

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Numbers to Letters", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
//     assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw');
//     assert.strictEqual(switcher(['4', '24']), 'wc');
//   })
// });

function switcher(x) {
  let alphabet = "zyxwvutsrqponmlkjihgfedcba!? ";
  let res = "";

  for (let char of x) {
    res += alphabet[+char - 1];
  }

  return res;
}
