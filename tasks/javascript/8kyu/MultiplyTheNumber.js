// Multiply the number

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

//  Sample Tests:
//  describe("Basic Tests",() =>{
//   Test.assertEquals(multiply(10),250);
//   Test.assertEquals(multiply(5),25);
//   Test.assertEquals(multiply(200),25000);
//   Test.assertEquals(multiply(0),0);
//   Test.assertEquals(multiply(-2),-10);
//   })

function multiply(number) {
  let length = number.toString().length;
  return number * Math.pow(5, number < 0 ? length - 1 : length);
}
