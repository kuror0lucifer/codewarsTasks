// The Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Sample Tests:
// import { assert } from "chai";
// import { encode, decode } from "./solution";

// describe("Sample tests", function() {
//   it("Encode", function() {
//     assert.strictEqual(encode('hello'), 'h2ll4');
//     assert.strictEqual(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
//     assert.strictEqual(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
//   });
//   it("Decode", function() {
//     assert.strictEqual(decode('h2ll4'), 'hello');
//     assert.strictEqual(decode('H4w 1r2 y45 t4d1y?'), 'How are you today?');
//     assert.strictEqual(decode('Th3s 3s 1n 2nc4d3ng t2st.'), 'This is an encoding test.');
//   });
// });

export function encode(string: string): string {
  let vowels: string = '_aeiou';
  let res: string[] = [];
  for (let item of string) {
    if (vowels.includes(item)) {
      res.push(vowels.indexOf(item).toString());
    } else res.push(item);
  }
  return res.join('');
}

export function decode(string: string): string {
  let vowels: string = '_aeiou';
  let res: string[] = [];
  for (let item of string) {
    if (/[0-9]/.test(item)) {
      res.push(vowels[Number(item)]);
    } else res.push(item);
  }
  return res.join('');
}
