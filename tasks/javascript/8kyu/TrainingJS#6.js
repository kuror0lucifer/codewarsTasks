// Training JS #6: Basic data types--Boolean and conditional statements if..else

// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^

// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

// var arr=[];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else            return "arr is empty";
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

// These values are converted to false in the conditional statement:

// 0, -0, "", null, undefined, NaN
// Task

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//       //test for equations and inequalities
//       var a=1,b=2,c=1;
//       Test.assertSimilar(trueOrFalse(a>b),"false");
//       Test.assertSimilar(trueOrFalse(a===b),"false");
//       Test.assertSimilar(trueOrFalse(a<b),"true");
//       Test.assertSimilar(trueOrFalse(a!==b),"true");
//       Test.assertSimilar(trueOrFalse(b>c),"true");
//       Test.assertSimilar(trueOrFalse(b===c),"false");
//       Test.assertSimilar(trueOrFalse(b<c),"false");
//       Test.assertSimilar(trueOrFalse(b!==c),"true");
//       Test.assertSimilar(trueOrFalse(a===c),"true");
//       Test.assertSimilar(trueOrFalse(a!==c),"false");
//       //test for logical operators and bitwise operators
//       var t=true,f=false;
//       Test.assertSimilar(trueOrFalse(t&&f),"false");
//       Test.assertSimilar(trueOrFalse(f&&f),"false");
//       Test.assertSimilar(trueOrFalse(t&&t),"true");
//       Test.assertSimilar(trueOrFalse(t||f),"true");
//       Test.assertSimilar(trueOrFalse(t||t),"true");
//       Test.assertSimilar(trueOrFalse(f||f),"false");
//       Test.assertSimilar(trueOrFalse(t&f),"false");
//       Test.assertSimilar(trueOrFalse(t&t),"true");
//       Test.assertSimilar(trueOrFalse(f&f),"false");
//       Test.assertSimilar(trueOrFalse(t|f),"true");
//       Test.assertSimilar(trueOrFalse(t|t),"true");
//       Test.assertSimilar(trueOrFalse(f|f),"false");
//       Test.assertSimilar(trueOrFalse(!t),"false");
//       Test.assertSimilar(trueOrFalse(!f),"true");
//       Test.assertSimilar(trueOrFalse(t^f),"true");
//       Test.assertSimilar(trueOrFalse(t^t),"false");
//       Test.assertSimilar(trueOrFalse(f^f),"false");
//       //test for implicit conversion
//       Test.assertSimilar(trueOrFalse(true),"true");
//       Test.assertSimilar(trueOrFalse(123),"true");
//       Test.assertSimilar(trueOrFalse("123"),"true");
//       Test.assertSimilar(trueOrFalse(["123"]),"true");
//       Test.assertSimilar(trueOrFalse("false"),"true");
//       Test.assertSimilar(trueOrFalse(false),"false");
//       Test.assertSimilar(trueOrFalse(0),"false");
//       Test.assertSimilar(trueOrFalse(""),"false");
//       Test.assertSimilar(trueOrFalse(null),"false");
//       Test.assertSimilar(trueOrFalse([].length),"false");
//       Test.assertSimilar(trueOrFalse(undefined),"false");
//     });
//   });

function trueOrFalse(val) {
  if (val) return "true";
  else return "false";
}
