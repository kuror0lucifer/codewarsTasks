// If you can read this...

// The idea for this kata came from 9gag today:

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:
// If, you can read?

// Output:
// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:
// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

// Sample Tests:
// describe('Tests', function () {
//     const chai = require('chai'), { strictEqual } = chai.assert;
//     chai.config.truncateThreshold = 0;

//     function doTest(input, expected) {
//         const actual = toNato(input);
//         strictEqual(actual, expected, `for string = "${input}"\n`);
//     }

//     it('Sample Tests', function () {
//         doTest('If you can read',
//             'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
//         );
//         doTest('Did not see that coming',
//             'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'
//         );
//         doTest('go for it!', 'Golf Oscar Foxtrot Oscar Romeo India Tango !');
//     });
// });

function toNato(words) {
  let res = words.toUpperCase().replace(/\s+/g, "").split("");
  for (let i = 0; i < res.length; i++) {
    if (!/[,.!?]/.test(res[i])) {
      res[i] = NATO[`${res[i]}`];
    }
  }
  return res.join(" ");
}
