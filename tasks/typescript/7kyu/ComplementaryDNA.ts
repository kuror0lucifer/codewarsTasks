// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("dnaStrand", function() {
//   it("Sample tests", function() {
//     assert.strictEqual(solution.Kata.dnaStrand("AAAA"),"TTTT","String AAAA is");
//     assert.strictEqual(solution.Kata.dnaStrand("ATTGC"),"TAACG","String ATTGC is");
//     assert.strictEqual(solution.Kata.dnaStrand("GTAT"),"CATA","String GTAT is");
//   });
// });

export class Kata {
  static dnaStrand(dna: string) {
    let obj: { [key: string]: string } = {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    };
    let res: string[] = dna.split("");
    for (let i: number = 0; i < res.length; i++) {
      res[i] = obj[res[i]];
    }
    return res.join("");
  }
}
