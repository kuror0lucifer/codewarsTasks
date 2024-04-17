// Sum of angles

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// Sample Tests:
// import { assert } from "chai";
// import { angle } from "./solution";

// describe("basic tests", () => {
//   it('angle(3)', () => assert.strictEqual(angle(3), 180));
//   it('angle(4)', () => assert.strictEqual(angle(4), 360));
// });

export function angle(n: number): number {
  return (n - 2) * 180;
}
