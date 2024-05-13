// All Star Code Challenge #22

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 323500 --> "89 hour(s) and 51 minute(s)"

// Sample Tests:
// import { assert } from "chai"
// import { toTime } from "./solution"

// describe("testing toTime()",function(){
//   it("should properly work with example test cases",function(){
//     assert.strictEqual(toTime(3600), '1 hour(s) and 0 minute(s)');
//     assert.strictEqual(toTime(3601), '1 hour(s) and 0 minute(s)');
//     assert.strictEqual(toTime(3500), '0 hour(s) and 58 minute(s)');
//     assert.strictEqual(toTime(323500), '89 hour(s) and 51 minute(s)');
//     assert.strictEqual(toTime(0), '0 hour(s) and 0 minute(s)');
//   });
// });

export function toTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  const hourString = hours === 1 ? '1 hour(s)' : `${hours} hour(s)`;
  const minuteString = minutes === 1 ? '1 minute(s)' : `${minutes} minute(s)`;

  return `${hourString} and ${minuteString}`;
}
