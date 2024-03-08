// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Sample Tests:
// const { assert } = require("chai");

// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })
// })

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}
