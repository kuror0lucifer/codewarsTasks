// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Sample Tests:
// import { assert } from "chai";

// import { simpleMultiplication } from "./solution";

// describe("Simple multiplication", () => {
//   it("Fixed test", () => {
//     assert.strictEqual(simpleMultiplication(2),16,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
//   });
// });

export function simpleMultiplication(num: number): number {
  return num % 2 ? num * 9 : num * 8;
}
