// Convert a string to an array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Sample Tests:
// import { stringToArray } from './solution';
// import chai, { assert } from 'chai';
// chai.config.truncateThreshold = 0;

// describe('stringToArray', () => {
//   it('example 1', () => {
//     assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
//   });

//   it('example 2', () => {
//     assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
//   });
// });

export function stringToArray(s: string): string[] {
  return s.split(" ");
}
