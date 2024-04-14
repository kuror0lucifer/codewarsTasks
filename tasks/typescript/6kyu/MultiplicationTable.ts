// Multiplication table

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// Sample Tests:
// import { multiplicationTable } from './solution'
// import { assert } from 'chai'

// describe('Example Tests', () => {
//   it('should work work with example tests', () => {
//     assert.deepStrictEqual(multiplicationTable(1), [[1]])
//     assert.deepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
//     assert.deepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
//   })
// })

export function multiplicationTable(size: number): number[][] {
  let arr: number[][] = [];

  for (let i: number = 1; i <= size; i++) {
    arr.push([]);
    for (let j: number = 1; j <= size; j++) {
      arr[i - 1].push(i * j);
    }
  }
  return arr;
}
