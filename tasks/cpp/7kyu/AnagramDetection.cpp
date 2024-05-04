/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Describe(IsAnagram){
  It(BasicTests){
    Assert::That(isAnagram("foefet", "toffee"), Equals(true));
    Assert::That(isAnagram("Buckethead", "DeathCubeK"), Equals(true));
    Assert::That(isAnagram("Twoo", "WooT"), Equals(true));
    Assert::That(isAnagram("dumble", "bumble"), Equals(false));
    Assert::That(isAnagram("around", "round"), Equals(false));
    Assert::That(isAnagram("ound", "round"), Equals(false));
    Assert::That(isAnagram("apple", "pale"), Equals(false));
    Assert::That(isAnagram("apple", "appeal"), Equals(false));
    Assert::That(isAnagram("apple", "appeal"), Equals(false));
    Assert::That(isAnagram("", ""), Equals(true));
  }
};
*/

#include <string>
#include <algorithm>

bool isAnagram(std::string test, std::string original){
  
  for (char& c : test) {
    c = std::tolower(c);
  }
  for (char& c : original) {
    c = std::tolower(c);
  }
  std::sort(test.begin(), test.end());
  std::sort(original.begin(), original.end());
  
  return test == original;
}
