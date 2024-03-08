// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Sample Tests:
// const {assert} = require("chai");

// it("example tests", () => {
//   assert.strictEqual(solution(""), "");
//   assert.strictEqual(solution("camelCasing"), "camel Casing");
//   assert.strictEqual(solution("camelCasingTest"), "camel Casing Test");
// });

function solution(string) {
  return string
    .split("")
    .map((x) => (x === x.toUpperCase() ? (x = ` ${x}`) : x))
    .join("");
}
