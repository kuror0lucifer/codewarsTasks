// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// Sample Tests:
// import { expect } from "chai";
// import { centuryFromYear } from './solution';

// describe("centuryFromYear", () => {
//     it("should return 18 when input is 1705", () => {
//         const expected = 18;
//         const actual = centuryFromYear(1705);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 19 when input is 1900", () => {
//         const expected = 19;
//         const actual = centuryFromYear(1900);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 17 when input is 1601", () => {
//         const expected = 17;
//         const actual = centuryFromYear(1601);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 20 when input is 2000", () => {
//         const expected = 20;
//         const actual = centuryFromYear(2000);

//         expect(actual).to.eql(expected);
//     });
// });

export const centuryFromYear = (year: number): number => {
  let century: number = Math.floor(year / 100);
  if (year % 100 !== 0) century += 1;
  return century;
};
