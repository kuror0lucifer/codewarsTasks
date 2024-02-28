// Strong Number (Special Numbers Series #2)

// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
//     Number passed is always Positive.
//     Return the result as String

// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

// strong_num(123) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

// strong_num(2)  ==>  return "STRONG!!!!"
// Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

// strong_num(150) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .

// Sample Tests:
// describe("Fixed Tests", () => {
//     it("Testing for 1", () => {
//       Test.assertEquals(strong(1), "STRONG!!!!");
//     });
//     it("Testing for 2", () => {
//       Test.assertEquals(strong(2), "STRONG!!!!");
//     });
//     it("Testing for 145", () => {
//       Test.assertEquals(strong(145), "STRONG!!!!");
//     });
//     it("Testing for 7", () => {
//       Test.assertEquals(strong(7), "Not Strong !!");
//     });
//     it("Testing for 93", () => {
//       Test.assertEquals(strong(93), "Not Strong !!");
//     });
//     it("Testing for 185", () => {
//       Test.assertEquals(strong(185), "Not Strong !!");
//     });
//   });

function strong(n) {
  let arr = n.toString().split("");
  let fuct = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= Number(arr[i]); j++) {
      fuct *= j;
    }
    sum += fuct;
    fuct = 1;
  }
  return n == sum ? "STRONG!!!!" : "Not Strong !!";
}
