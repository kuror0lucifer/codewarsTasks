/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Describe(Tests)
{
  It(Sample_Test_Cases)
    {
        Assert::That(XO("ooxx"), Equals(true));
        Assert::That(XO("xooxx"), Equals(false));
        Assert::That(XO("ooxXm"), Equals(true));
        Assert::That(XO("zpzpzpp"), Equals(true));
        Assert::That(XO("zzoo"), Equals(false));
    }
};
*/

bool XO(const std::string& str)
{
  int count_x = 0, count_o = 0;
  for (const char& c : str) {
    if (std::tolower(c) == 'o') {
      ++count_o;
    }
    if (std::tolower(c) == 'x') {
      ++count_x;
    }
  }
  return count_o == count_x;
}
