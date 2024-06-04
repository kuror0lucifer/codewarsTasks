// Meeting

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

// Sample Tests:
// import { assert } from "chai";
// import { meeting } from "./solution";

// describe("meeting", function() {

//     function testing(s: string, exp: string) {
//         console.log("Testing:\n", s)
//         let ans = meeting(s)
//         console.log("Actual:\n", ans)
//         console.log("Expect:\n", exp)
//         assert.equal(ans, exp)
//     }
//     it("Basic tests", function() {
//         testing("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn",
//             "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
//         testing("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell",
//             "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");

//     })
// });

export function meeting(s: string): string {
  const guests = s.split(';');
  const nameTuples = guests.map(guest => {
    const [firstName, lastName] = guest.split(':');
    return [firstName.toUpperCase(), lastName.toUpperCase()];
  });
  nameTuples.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  });
  const formattedNames = nameTuples.map(
    nameTuple => `(${nameTuple[1]}, ${nameTuple[0]})`
  );
  return formattedNames.join('');
}
