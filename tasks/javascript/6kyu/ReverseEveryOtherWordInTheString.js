// Reverse every other word in the string

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
//   Test.assertEquals(reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts")
//     });
//   });

function reverse(str) {
  str = str
    .trim()
    .split(/\s+/)
    .map((x, i) => (i % 2 > 0 && i != 0 ? x.split("").reverse().join("") : x))
    .join(" ");
  return str;
}
