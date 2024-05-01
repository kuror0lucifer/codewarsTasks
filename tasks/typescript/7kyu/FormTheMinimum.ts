// Form The Minimum

// Task

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)
// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// Sample Tests:
// import { expect } from "chai";
// import { minValue } from './solution';

// describe("minValue",() => {
//     it("should return 13 when input is [1, 3, 1]", () => {
//         const expected = 13;
//         const actual = minValue([1, 3, 1]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 457 when input is [4, 7, 5, 7]", () => {
//         const expected = 457;
//         const actual = minValue([4, 7, 5, 7]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 148 when input is [4, 8, 1, 4]", () => {
//         const expected = 148;
//         const actual = minValue([4, 8, 1, 4]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 579 when input is [5, 7, 9, 5, 7]", () => {
//         const expected = 579;
//         const actual = minValue([5, 7, 9, 5, 7]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 678 when input is [6, 7, 8, 7, 6, 6]", () => {
//         const expected = 678;
//         const actual = minValue([6, 7, 8, 7, 6, 6]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 45679 when input is [5, 6, 9, 9, 7, 6, 4]", () => {
//         const expected = 45679;
//         const actual = minValue([5, 6, 9, 9, 7, 6, 4]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 134679 when input is [1, 9, 1, 3, 7, 4, 6, 6, 7]", () => {
//         const expected = 134679;
//         const actual = minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]);

//         expect(actual).to.eql(expected);
//     });

//     it("should return 356789 when input is [3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]", () => {
//         const expected = 356789;
//         const actual = minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]);

//         expect(actual).to.eql(expected);
//     });
// });

export const minValue = (values: number[]): number => {
  let res = new Set<string>(values.map(x => x.toString()));
  return parseInt(Array.from(res).sort().join(''));
};
