// I love you, a little , a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// Sample Tests:
// import { assert } from "chai";
// import { howMuchILoveYou } from "./solution";

// describe("I love you...", function() {
//   it("Basic tests", function() {
//     assert.equal(howMuchILoveYou(7), "I love you", "Number of petals can be higher than 6");
//     assert.equal(howMuchILoveYou(3), "a lot");
//     assert.equal(howMuchILoveYou(6), "not at all");
//   });
// });

export function howMuchILoveYou(petals: number): string {
  let answers: string[] = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ];
  let index: number = petals % 6 === 0 ? 0 : petals % 6;

  return petals > 6 ? answers[index] : answers[index];
}
