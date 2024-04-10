// Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// Sample Tests:
// import {nerdify} from "./solution";
// import {assert} from "chai";

// describe("nerdify", function() {
//   it("Sample Tests", function() {
//     assert.strictEqual(nerdify("Fund4m3nt41s"),"Fund4m3nt41s");
//     assert.strictEqual(nerdify("Seven"),"S3v3n");
//     assert.strictEqual(nerdify("Los Angeles"),"Los 4ng313s");
//     assert.strictEqual(nerdify("Seoijselawuue"),"S3oijs314wuu3");
//   });
// });

export function nerdify(txt: string): string {
  const nerdyObj: { [key: string]: string } = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    l: "1",
  };

  return txt.replace(/[aAeEl]/g, (x) => nerdyObj[x]);
}
