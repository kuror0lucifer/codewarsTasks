// Changing letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// Sample Tests:
// const strictEqual = require('chai').assert.strictEqual;

// function doTest (input, expected) {
// 	const actual = swap(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", () => {
// 	it("sample tests", () => {
// 		doTest("", "");
// 		doTest("   @@@", "   @@@");
// 		doTest("HelloWorld!", "HEllOWOrld!");
// 		doTest("Sunday", "SUndAy");
// 		doTest("Codewars", "COdEwArs");
// 		doTest("Monday", "MOndAy");
// 		doTest("Friday", "FrIdAy");
// 		doTest("abracadabra", "AbrAcAdAbrA");
// 		doTest("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		doTest("ABRACADABRA", "ABRACADABRA");
// 		doTest("aBRaCaDaBRa", "ABRACADABRA");
// 	});
// });

function swap(string) {
  string = string
    .split("")
    .map((x) => (/[aeiou]/.test(x) ? x.toUpperCase() : x))
    .join("");
  return string;
}
