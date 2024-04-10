// Selective fear of numbers

// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

// Sample Tests:
// import { assert } from "chai";
// import { amIAfraid } from "./solution";

// describe("example", function() {
//   it("test", function() {
//     assert.equal(amIAfraid("Monday", 13), false, "Should return false");
//     assert.equal(amIAfraid("Sunday", -666), true, "Should return true");
//     assert.equal(amIAfraid("Tuesday", 2), false, "Should return false");
//     assert.equal(amIAfraid("Tuesday", 965), true, "Should return true");
//     assert.equal(amIAfraid("Friday", 2), true, "Should return true");
//   });
// });

export function amIAfraid(day: string, num: number): boolean {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return num === 12;
    case "tuesday":
      return num > 95;
    case "wednesday":
      return num === 34;
    case "thursday":
      return num === 0;
    case "friday":
      return num % 2 === 0;
    case "saturday":
      return num === 56;
    case "sunday":
      return Math.abs(num) === 666;
    default:
      return false;
  }
}
