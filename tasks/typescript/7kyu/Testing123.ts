// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// Sample Tests:
// import { assert } from "chai";
// import { number } from "./solution";

// describe("Testing 1-2-3", () => {
//   it("Fixed tests", () => {
//     assert.deepEqual(number([]), []);
//     assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
//     assert.deepEqual(number(["", "", "", "", ""]), ["1: ", "2: ", "3: ", "4: ", "5: "]);
//   });
// });

export function number(array: string[]): string[] {
  return array.map((x, i) => (x = `${i + 1}: ${x}`));
}
