// Playing with digits

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (
// a
// p
// +
// b
// p
// +
// 1
// +
// c
// p
// +
// 2
// +
// d
// p
// +
// 3
// +
// .
// .
// .
// )
// =
// n
// ∗
// k
// (a
// p
//  +b
// p+1
//  +c
// p+2
//  +d
// p+3
//  +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:

// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Sample Tests:
// import { G964 } from "./solution";
// import { assert } from "chai";

// function dotest(n: number, p: number, expected: number) {
//     assert.equal(G964.digPow(n, p), expected, "Incorrect answer for n=" + n + ", p=" + p);
// }

// describe("Fixed Tests", function() {
//     it("digPow", function() {
//         dotest(89, 1, 1);
//         dotest(92, 1, -1);
//         dotest(114, 3, 9);
//     });
// });

export class G964 {
  public static digPow = (n: number, p: number) => {
    let arr: string[] = [],
      sum: number = 0,
      k: number = 0;
    const z = n;
    arr = String(n).split('');
    for (let item of arr) {
      sum += Math.pow(Number(item), p);
      p++;
    }
    k = sum / z;
    return sum % z ? -1 : k;
  };
}
