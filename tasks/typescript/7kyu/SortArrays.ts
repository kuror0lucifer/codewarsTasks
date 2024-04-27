// Sort arrays - 1

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// Sample Tests:
// import { assert } from "chai"
// import { sortMe } from "./solution"

// describe("Basic tests", () => {
//   it("Testing basic sample test", () => {
//     assert.deepEqual(sortMe(["one", "two", "three"]), ["one", "three", "two"])
//   })
// })

export function sortMe(names: string[]): string[] {
  return names.sort();
}
