// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Sample Tests:
// import { assert } from "chai";
// import { capitalize } from "./solution";

// describe("Basic tests", function() {
//   it("Testing for abcdef", () => assert.deepEqual(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']));
//   it("Testing for codewars", () => assert.deepEqual(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']));
//   it("Testing for abracadabra", () => assert.deepEqual(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']));
//   it("Testing for codewarriors", () => assert.deepEqual(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']));
//   it("Testing for indexinglessons", () => assert.deepEqual(capitalize("indexinglessons"), ['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']));
//   it("Testing for codingisafunactivity", () => assert.deepEqual(capitalize("codingisafunactivity"), ['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']));
// });

export function capitalize(s: string) {
  return [
    s
      .split('')
      .map((x, i) => (!(i % 2) ? (x = x.toUpperCase()) : x))
      .join(''),
    s
      .split('')
      .map((x, i) => (i % 2 ? (x = x.toUpperCase()) : x))
      .join(''),
  ];
}
