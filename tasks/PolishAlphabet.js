// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
//   Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
//   Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

//     });
//   });

function correctPolishLetters(string) {
  let alphabet = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  let res = string.split("");
  for (let i = 0; i < res.length; i++) {
    if (Object.keys(alphabet).includes(res[i])) {
      res[i] = alphabet[res[i]];
    }
  }
  return res.join("");
}
