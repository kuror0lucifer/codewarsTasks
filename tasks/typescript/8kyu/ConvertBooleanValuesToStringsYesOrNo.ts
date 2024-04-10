// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Sample Tests:
// import {boolToWord} from "./solution";
// import {assert} from "chai";

// describe("boolToWord", function() {
//   it("Sample tests", function() {
//     assert.equal(boolToWord(true), "Yes");
//     assert.equal(boolToWord(false), "No");
//   });
// });

export const boolToWord = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};
