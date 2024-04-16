// Factorial

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// Sample Tests:
// import { assert } from "chai";
// import { factorial } from "./solution";

// describe("Basic tests", () => {
//   it("Testing for 0", () => assert.strictEqual(factorial(0), 1));
//   it("Testing for 1", () => assert.strictEqual(factorial(1), 1));
//   it("Testing for 4", () => assert.strictEqual(factorial(4), 24));
//   it("Testing for 7", () => assert.strictEqual(factorial(7), 5040));
//   it("Testing for 17", () => assert.strictEqual(factorial(17), 355687428096000));
// });

export function factorial(n: number): number {
  return n > 1 ? n * factorial(n - 1) : 1;
}
