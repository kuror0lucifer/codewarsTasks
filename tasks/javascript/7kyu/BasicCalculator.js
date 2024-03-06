// Basic Calculator

// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
// Test.assertEquals(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
// Test.assertEquals(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
// Test.assertEquals(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
// Test.assertEquals(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
// Test.assertEquals(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
// Test.assertEquals(calculate(-3,"/", 0), null, "-3 / 0 = null")
// Test.assertEquals(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
// Test.assertEquals(calculate(-3,"w", 0), null, "-3 w 0 = null")
//   });
// });

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : null;
    default:
      return null;
  }
}
