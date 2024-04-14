// No oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Sample Tests:
// import { assert } from "chai";
// import { noOdds } from "./solution";

// describe( "Testing some inputs", function(){
//   it("should return [0] for [0,1]", function(){
//     assert.deepEqual( noOdds( [0,1] ), [0]);
//   });
//   it("should return [0,2] for [0,1,2,3]", function(){
//     assert.deepEqual(noOdds( [0,1,2,3] ), [0,2]);
//   });
// });

export function noOdds(values: number[]): number[] {
  return values.filter(x => !(x % 2));
}
