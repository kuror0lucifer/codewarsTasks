// Regex Password Validation

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

// Sample Tests:
// import { assert } from "chai";

// import { REGEXP } from "./solution";

// describe("Tests suite", () => {

//   function doTest (string: string, expected: boolean) {
//     const actual = REGEXP.test(string);
//     const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`;
//     assert.strictEqual(actual, expected, log);
//   }

// 	it("sample tests", () => {
// 		doTest('fjd3IR9', true);
// 		doTest('ghdfj32', false);
// 		doTest('DSJKHD23', false);
// 		doTest('dsF43', false);
// 		doTest('4fdg5Fj3', true);
// 		doTest('DHSJdhjsU', false);
// 		doTest('fjd3IR9.;', false);
// 		doTest('fjd3  IR9', false);
// 		doTest('djI38D55', true);
// 		doTest('djI3_8D55', false);
// 		doTest('djI38D55@@', false);
// 	});
// });

export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
