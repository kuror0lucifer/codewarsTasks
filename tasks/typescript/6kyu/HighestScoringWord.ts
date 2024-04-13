// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Sample Tests:
// import {assert} from 'chai'
// import {high} from './solution'

// const solutions = [
//   ['man i need a taxi up to ubud', 'taxi'],
//   ['what time are we climbing up the volcano', 'volcano'],
//   ['take me to semynak', 'semynak'],
//   ['massage yes massage yes massage', 'massage'],
//   ['take two bintang and a dance please', 'bintang'],
//   ['aa b', 'aa'],
//   ['b aa', 'b'],
//   ['bb d', 'bb'],
//   ['d bb', 'd'],
//   ['aaa b', 'aaa'],
// ]

// describe('Sample test', () => {
//   it('works with test inputs', () => {
//     solutions.forEach(([input, expected]) => {
//       assert.strictEqual(high(input), expected)
//     })
//   })
// })

export const high = (str: string): string => {
  let alphabet: string = '_abcdefghijklmnopqrstuvwxyz',
    maxScore: number = 0,
    res: string = '',
    arrStr: string[] = str.split(' ');
  for (let item of arrStr) {
    let sum: number = 0;
    for (let i: number = 0; i < item.length; i++) {
      sum += alphabet.indexOf(item[i]);
    }
    if (sum > maxScore) {
      maxScore = sum;
      res = item;
    }
  }
  return res;
};
