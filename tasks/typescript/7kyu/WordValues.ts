// Word values

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

// Sample Tests:
// import { assert } from "chai";
// import { wordValue } from "./solution";

// describe("Word values", () => {
//   it("fixed tests", () => {
//     assert.deepEqual(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
//     assert.deepEqual(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);
//     assert.deepEqual(wordValue(["abc", "abc", "abc", "abc"]), [6, 12, 18, 24]);
//     assert.deepEqual(wordValue(["abcdefghijklmnopqrstuvwxyz", "stamford bridge", "haskellers"]), [351, 282, 330]);
//     assert.deepEqual(wordValue(["i love coding", "better than pizza", "i got this"]), [115, 382, 321]);
//     assert.deepEqual(wordValue(["mercury", "venus", "earth mars", "jupiter saturn", "uranus neptune"]), [103, 162, 309, 768, 945]);
//     assert.deepEqual(wordValue(["a cup", "some tea", "more coffee", "one glass"]), [41, 156, 273, 368]);
//     assert.deepEqual(wordValue(["a", "e", "i", "o", "u", "the end"]), [1, 10, 27, 60, 105, 336]);
//     assert.deepEqual(wordValue(["coding", "better pizza", "i got this too"]), [52, 296, 471]);
//   });
// });

export function wordValue(arr: string[]) {
  let alph: string = '_abcdefghijklmnopqrstuvwxyz',
    value: number = 0,
    res: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    value = 0;
    for (let j: number = 0; j < arr[i].length; j++) {
      if (/[a-z]/.test(arr[i][j])) {
        value += alph.indexOf(arr[i][j]);
      }
    }
    value *= i + 1;
    res.push(value);
  }
  return res;
}
