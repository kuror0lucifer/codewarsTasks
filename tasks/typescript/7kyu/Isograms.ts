// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// Sample Tests:
// import { assert } from "chai";

// import { isIsogram } from "./solution";

// describe("example", function() {
//   it("test", function() {
//     assert.equal( isIsogram("Dermatoglyphics"), true );
//     assert.equal( isIsogram("isogram"), true );
//     assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
//     assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
//     assert.equal( isIsogram("isIsogram"), false );
//     assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );
//   });
// });

export function isIsogram(str: string): boolean {
  str = str.toLowerCase();
  return new Set([...str]).size === [...str].length;
}
