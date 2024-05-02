/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

Describe(vowelIndicesTest)
{
    It(SimpleTests)
    {
        std::vector<int> res { 2, 4 };
        Assert::That(vowelIndices("super"), Equals(res));
    }
};
*/

#include <vector>
#include <string>
#include <set>

std::vector<int> vowelIndices(const std::string& word)
{
  std::set<char> alh = {'a','e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'};
    std::vector<int> res;
  for (size_t i = 0; i < word.size(); ++i) {
    if (alh.find(word[i]) != alh.end()) {
      res.push_back(i + 1);
    }
  }
    return res;
}
