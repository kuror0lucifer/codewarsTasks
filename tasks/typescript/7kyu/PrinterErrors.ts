// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// Sample Tests:
// import {printerError} from './solution'
// import {assert} from "chai";

// function testing(s:string, expected:string) {
//   assert.strictEqual(printerError(s), expected)
// }

// describe("Fixed Tests printerError", function(){
//   it("Basic tests", function() {
//   	let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//     testing(s, "3/56")
//     s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//     testing(s, "6/60")
//     s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
//     testing(s, "11/65")
//   });
// });

export function printerError(s: string): string {
  let errorLetters: number = 0;
  let arr: string[] = s.split('');
  for (let i: number = 0; i < arr.length; i++) {
    if (/[n-z]/.test(arr[i])) {
      errorLetters++;
    }
  }
  return `${errorLetters}/${s.length}`;
}
