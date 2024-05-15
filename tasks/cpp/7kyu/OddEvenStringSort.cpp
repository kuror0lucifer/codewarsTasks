// Odd-Even String Sort
/*
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.
Describe(Other_Tests)
{
    It(Static_Ones)
    {
        Assert::That(sortMyString("CodeWars"), Equals("CdWr oeas"));
        Assert::That(sortMyString("YCOLUE'VREER"), Equals("YOU'RE CLEVER"));
    }
};
*/
#include <string>

std::string sortMyString(const std::string &s)
{
  std::string odd = "";
  std::string even = "";
  for (size_t i = 0; i < s.size(); ++i) {
    if (i % 2 == 0) {
      odd += s[i];
    }
    else {
      even += s[i];
    }
  }
    return odd + " " + even;
}
