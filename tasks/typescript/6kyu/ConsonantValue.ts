// Consonant value

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

// Sample Tests:
// import { assert } from "chai";
// import { solve } from "./solution";

// describe("Basic tests", function() {
//   it("Testing for 'zodiac', expecting: 26", () => assert.strictEqual(solve("zodiac"), 26));
//   it("Testing for 'chruschtschov', expecting: 80", () => assert.strictEqual(solve("chruschtschov"), 80));
//   it("Testing for 'khrushchev', expecting: 38", () => assert.strictEqual(solve("khrushchev"), 38));
//   it("Testing for 'strength', expecting: 57", () => assert.strictEqual(solve("strength"), 57));
//   it("Testing for 'catchphrase', expecting: 73", () => assert.strictEqual(solve("catchphrase"), 73));
//   it("Testing for 'twelfthstreet', expecting: 103", () => assert.strictEqual(solve("twelfthstreet"), 103));
//   it("Testing for 'mischtschenkoana', expecting: 80", () => assert.strictEqual(solve("mischtschenkoana"), 80));
// });

export function solve(s: string) {
  const alph: string = '_abcdefghijklmnopqrstuvwxyz';
  let res: number = 0;
  let maxSub: number = 0;

  for (let char of s) {
    if (/[aeiou]/.test(char)) res = 0;
    else {
      res += alph.indexOf(char);
      if (res > maxSub) maxSub = res;
    }
  }
  return maxSub;
}
