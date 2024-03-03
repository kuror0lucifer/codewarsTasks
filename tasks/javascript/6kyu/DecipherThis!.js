// Decipher this!

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

// Sample Tests:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
//     });
//   });

function decipherThis(str) {
  let res = str
    .replace(/[a-z]/g, "")
    .split(" ")
    .map((x) => String.fromCharCode(x));
  let answer = "";
  str = str.replace(/[0-9]/g, "").split(" ");
  for (let i = 0; i < res.length; i++) {
    answer += `${res[i] + str[i]} `;
  }
  answer = answer.split(" ");
  for (let j = 0; j < answer.length; j++) {
    if (answer[j].length > 2) {
      answer[j] =
        answer[j][0] +
        answer[j][answer[j].length - 1] +
        answer[j].slice(2, -1) +
        answer[j][1];
    }
  }
  return answer.join(" ").trim();
}
