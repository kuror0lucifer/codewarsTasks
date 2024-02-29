// Multiplying numbers as strings

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// Sample Tests:
// describe('Some simple multiplications', function() {
//     it('simple', function() {
//       assert.strictEqual(multiply("2", "3"), "6");
//       assert.strictEqual(multiply("30", "69"), "2070");
//       assert.strictEqual(multiply("11", "85"), "935");
//     });
//   });

//   describe('Some corner case', function() {
//     it('corner cases', function() {
//       assert.strictEqual(multiply("2" ,"0"), "0");
//       assert.strictEqual(multiply("0", "30"), "0");
//       assert.strictEqual(multiply("0000001", "3"), "3");
//       assert.strictEqual(multiply("1009", "03"), "3027");
//     });
//   });

//   describe('Some big multiplications', function() {
//     it('big boys', function() {
//       assert.strictEqual(multiply("98765", "56894"), "5619135910");
//       assert.strictEqual(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
//       assert.strictEqual(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
//       assert.strictEqual(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
//     });
//   });

function multiply(a, b) {
  const product = Array(a.length + b.length).fill(0);

  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      const tempProduct = parseInt(a[i]) * parseInt(b[j]) + product[i + j + 1];
      product[i + j + 1] = tempProduct % 10;
      product[i + j] += Math.floor(tempProduct / 10);
    }
  }

  while (product.length > 1 && product[0] === 0) {
    product.shift();
  }

  return product.join("");
}

// Second decision for Node v10.X
function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}
