// Shortest Word
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
Describe(Tests)
{
  It(Sample_Test_Cases)
  {
    Assert::That(find_short("bitcoin take over the world maybe who knows perhaps"), Equals(3));
    Assert::That(find_short("turns out random test cases are easier than writing out basic ones"), Equals(3));
    Assert::That(find_short("lets talk about javascript the best language"), Equals(3));
    Assert::That(find_short("i want to travel the world writing code one day"), Equals(1));
    Assert::That(find_short("Lets all go on holiday somewhere very cold"), Equals(2));
    Assert::That(find_short("Let's travel abroad shall we"), Equals(2));
  }
};
*/

#include <string>
int find_short(std::string str)
{
  std::string word;
  int min;
  for (const char& c: str) {
    if (c == ' ') {
      min = min < word.size() ? min : word.size();
      word.clear();
    }
    else {
      word += c;
    }
  }
  min = min < word.size() ? min : word.size();
  return min;
}
