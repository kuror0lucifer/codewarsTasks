// Tail Swap

// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples

// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

// Sample Tests:
// import { assert, config } from "chai";
// import { tailSwap } from "./solution";
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("Basic Tests", () => {
//     doTest(['abc:123', 'cde:456'], ['abc:456', 'cde:123']);
//     doTest(['a:12345', '777:xyz'], ['a:xyz', '777:12345']);
//   });
// });

// function doTest(arr: [string,string], exp: [string,string]) {
//   const msg = "Test failed for " + JSON.stringify(arr);
//   assert.deepEqual(tailSwap(arr), exp, msg);
// }

export function tailSwap(arr: [string, string]): [string, string] {
  const tailA: string = arr[0].split(":")[1];
  const tailB: string = arr[1].split(":")[1];
  const prefixA: string = arr[0].split(":")[0];
  const prefixB: string = arr[1].split(":")[0];
  return [`${prefixA}:${tailB}`, `${prefixB}:${tailA}`];
}
