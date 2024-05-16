//Fix string case
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
Describe(Solve){
  It(BasicTests){
    Assert::That(solve("code"), Equals("code"));
    Assert::That(solve("CODe"), Equals("CODE"));
    Assert::That(solve("COde"), Equals("code"));
    Assert::That(solve("Code"), Equals("code"));
    Assert::That(solve(""), Equals(""));
  }
};
*/

#include <string>
#include <algorithm>
std::string solve(const std::string& str){
  //your code here
  int lower = 0;
  int upper = 0;
  for (const char& c: str) {
    if (std::islower(c)) {
      ++lower;
    } else {
      ++upper;
    }
  }
  std::string answ(str.begin(), str.end());
  if (lower >= upper) {
    std::transform(answ.begin(), answ.end(), answ.begin(), tolower);
  } else {
    std::transform(answ.begin(), answ.end(), answ.begin(), toupper);
  }
  return answ;
}
