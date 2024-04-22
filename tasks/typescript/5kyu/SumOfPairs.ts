// Sum of Pairs

// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// Sample Tests:
// import { assert } from "chai";

// import { sumPairs } from "./solution";
// const l1: number[] = [1, 4, 8, 7, 3, 15],
// l2: number[] = [1, -2, 3, 0, -6, 1],
// l3: number[] = [20, -13, 40],
// l4: number[] = [1, 2, 3, 4, 1, 0],
// l5: number[] = [10, 5, 2, 3, 7, 5],
// l6: number[] = [4, -2, 3, 3, 4],
// l7: number[] = [0, 2, 0],
// l8: number[] = [5, 9, 13, -3];

// describe("example", function() {
//   it("test", () => {
//     assert.deepEqual(sumPairs(l1, 8), [1, 7], "Basic: ["+l1+"] should return [1, 7] for sum = 8");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l2, -6), [0, -6], "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l3, -7), undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l4, 2), [1, 1], "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l5, 10), [3, 7], "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l6, 8), [4, 4], "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l7, 0), [0, 0], "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
//   });
//   it("test", () => {
//     assert.deepEqual(sumPairs(l8, 10), [13, -3], "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
//   });
// });

export function sumPairs(ints: number[], s: number): [number, number] | void {
  const intsSet = new Set<number>();
  for (let i: number = 0; i < ints.length; i++) {
    let currentInt: number = ints[i];
    if (intsSet.has(s - currentInt)) return [s - currentInt, currentInt];
    else intsSet.add(currentInt);
  }
}
