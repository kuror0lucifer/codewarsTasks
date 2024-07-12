//Switcheroo
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
Describe(Fixed_tests) {
  It(Sample_cases) {
    Assert::That(switcheroo("abc"), Equals("bac"));
    Assert::That(switcheroo("aaabcccbaaa"), Equals("bbbacccabbb"));
    Assert::That(switcheroo("cccccc"), Equals("cccccc"));
    Assert::That(switcheroo("abababababababab"), Equals("babababababababa"));
    Assert::That(switcheroo("aaaa"), Equals("bbbb"));
    Assert::That(switcheroo("bbbb"), Equals("aaaa"));
  }
};
*/
#include <string>

std::string switcheroo(const std::string &s) {
  std::string answ(s);
  for (char& c: answ) {
    if (c == 'a') {
      c = 'b';
    }
    else if (c == 'b') {
      c = 'a';
    }
  }
  return answ;
}
