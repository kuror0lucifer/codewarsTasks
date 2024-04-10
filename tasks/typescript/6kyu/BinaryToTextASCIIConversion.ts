// Binary to Text (ASCII) Conversion

// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

// Sample Tests:
// See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai"
// import { binaryToString } from "./solution"

// TODO Add your tests here
// describe("example", function() {
//   it("test", function() {
//Test apha chars
//     assert.equal(binaryToString('01100001'), 'a')
//     assert.equal(binaryToString('01001011010101000100100001011000010000100101100101000101'), 'KTHXBYE')

//Test numeric
//     assert.equal(binaryToString('00110001001100000011000100110001'), '1011')

//Test special chars
//     assert.equal(binaryToString('001111000011101000101001'), '<:)')
//   })
// })

export function binaryToString(binary: string) {
  let res: string = "";
  for (let i: number = 0; i < binary.length; i += 8) {
    res += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  return res;
}
