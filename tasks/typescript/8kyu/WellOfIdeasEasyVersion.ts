// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Sample Tests:
// import { assert } from "chai";

// import { well } from "./solution";

// describe("Well of Ideas - Easy Version", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//   });
// });

export function well(x: string[]): string {
  let count: number = 0;
  x.map(y => (y === 'good' ? count++ : y));
  return count <= 2 && count > 0
    ? 'Publish!'
    : count === 0
    ? 'Fail!'
    : 'I smell a series!';
}
