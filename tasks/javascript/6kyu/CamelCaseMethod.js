// CamelCase Method

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):

// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

// Sample Tests:
// const { assert } = require('chai');

// it("Basic tests",() =>{
//   assert.strictEqual("test case".camelCase(), "TestCase");
//   assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
//   assert.strictEqual("say hello".camelCase(), "SayHello");
//   assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
//   assert.strictEqual("".camelCase(), "");
// })

String.prototype.camelCase = function () {
  let res = this.split(" ")
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1))
    .join("");
  return res;
};
