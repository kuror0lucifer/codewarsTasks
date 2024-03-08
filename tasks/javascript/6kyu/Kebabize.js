// Kebabize

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// Sample Tests:
// const {assert} = require('chai');

// describe('Sample Tests', function() {
//   const tests = [
//     ['MyCamelCasedString', 'my-camel-cased-string'],
//     ['myCamelCasedString', 'my-camel-cased-string'],
//     ['MyCamelHas3Humps', 'my-camel-has-humps'],
//     ['myCamelHas3Humps', 'my-camel-has-humps'],
//     ['CAMEL', 'c-a-m-e-l'],
//     ['cAMEL', 'c-a-m-e-l'],
//     ['AbstractSingletonProxyFactoryBean', 'abstract-singleton-proxy-factory-bean'],
//     ['abstractSingletonProxyFactoryBean', 'abstract-singleton-proxy-factory-bean'],
//   ];

//   for (let [string, expected] of tests) {
//     it(`"${string}"`, function() {
//       let actual = kebabize(string);
//       assert.strictEqual(actual, expected);
//     });
//   }
// });

function kebabize(str) {
  str = str
    .replace(/([A-Z])/g, "-$1")
    .replace(/[0-9]/g, "")
    .toLowerCase();
  return str.replace(/^-/, "");
}
