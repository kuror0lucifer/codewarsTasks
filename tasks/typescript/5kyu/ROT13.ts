// ROT13

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// Sample Tests:
// import { assert } from "chai";
// import { rot13 } from "./solution";

// describe("Sample tests", () => {
//   it("should work for 'EBG13 rknzcyr.'", () =>
//     assert.strictEqual(rot13("EBG13 rknzcyr."), "ROT13 example.")
//   );
//   it("should work for 'This is my first ROT13 excercise!'", () =>
//     assert.strictEqual(rot13("This is my first ROT13 excercise!"), "Guvf vf zl svefg EBG13 rkprepvfr!")
//   );
// });

export function rot13(str: string): string {
  const alphabet: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    ROT13: string = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let arr: string[] = str.split('').map(x => {
    if (/[a-z]/i.test(x)) {
      return ROT13[alphabet.indexOf(x)];
    }
    return x;
  });
  return arr.join('');
}
