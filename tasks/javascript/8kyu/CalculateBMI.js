// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Sample Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(bmi(80, 1.80), "Normal");
//   });
// });

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) return "Underweight";
  else if (bmi > 18.5 && bmi <= 25.0) return "Normal";
  else if (bmi > 25.0 && bmi <= 30.0) return "Overweight";
  else return "Obese";
}
