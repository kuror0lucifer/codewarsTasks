// Sort Out The Men From Boys

// Scenario

// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd !alt!alt

// Task

// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt!alt

// Notes

// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists . !alt

// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// Input >> Output Examples:

// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
// Explanation:

// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:

// Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

// Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

// menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
// Explanation:

// Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

// Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .

// Playing with Numbers Series

// Playing With Lists/Arrays Series

// Bizarre Sorting-katas

// For More Enjoyable Katas

// ALL translations are welcomed

// Enjoy Learning !!

// Zizou

// Sample Tests:
// import { menFromBoys } from "./solution";
// import { assert } from "chai";

// describe("Fixed tests", function() {
//   it("Testing for [7, 3, 14, 17]", function() {
//     assert.deepEqual(menFromBoys([7, 3, 14, 17]), [14, 17, 7, 3]);
//   });
//   it("Testing for [2, 43, 95, 90, 37]", function() {
//     assert.deepEqual(menFromBoys([2, 43, 95, 90, 37]), [2, 90, 95, 43, 37]);
//   });
//   it("Testing for [20, 33, 50, 34, 43, 46]", function() {
//     assert.deepEqual(menFromBoys([20, 33, 50, 34, 43, 46]), [20, 34, 46, 50, 43, 33]);
//   });
//   it("Testing for [82, 91, 72, 76, 76, 100, 85]", function() {
//     assert.deepEqual(menFromBoys([82, 91, 72, 76, 76, 100, 85]), [72, 76, 82, 100, 91, 85]);
//   });
//   it("Testing for [2, 15, 17, 15, 2, 10, 10, 17, 1, 1]", function() {
//     assert.deepEqual(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]), [2, 10, 17, 15, 1]);
//   });
//   it("Testing for [-32, -39, -35, -41]", function() {
//     assert.deepEqual(menFromBoys([-32, -39, -35, -41]), [-32, -35, -39, -41]);
//   });
//   it("Testing for [-64, -71, -63, -66, -65]", function() {
//     assert.deepEqual(menFromBoys([-64, -71, -63, -66, -65]), [-66, -64, -63, -65, -71]);
//   });
//   it("Testing for [-94, -99, -100, -99, -96, -99]", function() {
//     assert.deepEqual(menFromBoys([-94, -99, -100, -99, -96, -99]), [-100, -96, -94, -99]);
//   });
//   it("Testing for [-53, -26, -53, -27, -49, -51, -14]", function() {
//     assert.deepEqual(menFromBoys([-53, -26, -53, -27, -49, -51, -14]), [-26, -14, -27, -49, -51, -53]);
//   });
//   it("Testing for [-17, -45, -15, -33, -85, -56, -86, -30]", function() {
//     assert.deepEqual(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]), [-86, -56, -30, -15, -17, -33, -45, -85]);
//   });
//   it("Testing for [12, 89, -38, -78]", function() {
//     assert.deepEqual(menFromBoys([12, 89, -38, -78]), [-78, -38, 12, 89]);
//   });
//   it("Testing for [2, -43, 95, -90, 37]", function() {
//     assert.deepEqual(menFromBoys([2, -43, 95, -90, 37]), [-90, 2, 95, 37, -43]);
//   });
//   it("Testing for [82, -61, -87, -12, 21, 1]", function() {
//     assert.deepEqual(menFromBoys([82, -61, -87, -12, 21, 1]), [-12, 82, 21, 1, -61, -87]);
//   });
//   it("Testing for [63, -57, 76, -85, 88, 2, -28]", function() {
//     assert.deepEqual(menFromBoys([63, -57, 76, -85, 88, 2, -28]), [-28, 2, 76, 88, 63, -57, -85]);
//   });
//   it("Testing for [49, 818, -282, 900, 928, 281, -282, -1]", function() {
//     assert.deepEqual(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]), [-282, 818, 900, 928, 281, 49, -1]);
//   });
// });

export function menFromBoys(arr: number[]): number[] {
  let men = new Set<number>(arr.filter(x => !(x % 2)).sort((a, b) => a - b)),
    boys = new Set<number>(arr.filter(x => x % 2).sort((a, b) => b - a));
  return [...men, ...boys];
}
