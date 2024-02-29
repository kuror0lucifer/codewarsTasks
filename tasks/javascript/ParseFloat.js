// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// Sample tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(parseF("1"), 1.0);
//   });
// });

function parseF(s) {
  return !isNaN(parseFloat(s)) ? parseFloat(s) : null;
}
