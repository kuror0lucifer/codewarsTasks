// shorter concat [reverse longer]

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// Sample Tests:
// import { assert } from "chai";
// import { shorterReverseLonger } from "./solution";

// describe("Example Tests", function () {
//   it("Basic Tests", function () {
//     assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde")
//     assert.strictEqual(shorterReverseLonger("hello", "bau"), "bauollehbau")
//     assert.strictEqual(shorterReverseLonger("abcde", "fghi"), "fghiedcbafghi")
//   })
// })

export function shorterReverseLonger(a: string, b: string): string {
  let min: string, max: string
  if (a.length < b.length) {
    min = a
    max = b
  }
  else {
    min = b
    max = a
  }
  return `${min}${max.split('').reverse().join('')}${min}`