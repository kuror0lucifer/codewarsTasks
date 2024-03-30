// Convert a Boolean to a String

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
//   });
// });

function booleanToString(b) {
  return `${b}`;
}

function booleanToString(b) {
  return b + "";
}

function booleanToString(b) {
  return b.toString();
}

function booleanToString(b) {
  return String(b);
}
