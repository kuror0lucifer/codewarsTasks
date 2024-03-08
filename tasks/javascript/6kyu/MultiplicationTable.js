// Multiplication table

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
//   });
// });

multiplicationTable = function (size) {
  let res = [];
  for (let i = 1; i <= size; i++) {
    let arr = [i];
    let multiply = 2;

    while (!(arr.length == size)) {
      arr.push(i * multiply);
      multiply++;
    }

    res.push(arr);
  }
  return res;
};
