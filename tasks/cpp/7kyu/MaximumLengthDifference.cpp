//Maximum Length Difference
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
#include <string>
#include <vector>

void testequal(int ans, int sol) {
    Assert::That(ans, Equals(sol));
}
void dotest(std::vector<std::string> &a1, std::vector<std::string> &a2, int expected)
{
    testequal(MaxDiffLength::mxdiflg(a1, a2), expected);
}
Describe(mxdiflg_Tests)
{
    It(Fixed__Tests)
    {
        std::vector<std::string> s1 = {"hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"};
        std::vector<std::string> s2 = {"cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"};
        dotest(s1, s2, 13);
        s1 = {"ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"};
        s2 = {"bbbaaayddqbbrrrv"};
        dotest(s1, s2, 10);
    }
};


*/

#include <string>
#include <vector>
#include <algorithm>
#include <functional>
class MaxDiffLength
{
public:
    static int mxdiflg(std::vector<std::string> &a1, std::vector<std::string> &a2) {
      if (a1.empty() || a2.empty()) {
        return -1;
      }
      std::function<bool (std::string, std::string)> cmp = [] (std::string item1, std::string item2) {
            return item1.size() < item2.size();
        };
        int maxi1 = std::max_element(a1.begin(), a1.end(), cmp)->size();
        int mini1 = std::min_element(a1.begin(), a1.end(), cmp)->size();
        int maxi2 = std::max_element(a2.begin(), a2.end(), cmp)->size();
        int mini2 = std::min_element(a2.begin(), a2.end(), cmp)->size();
        return std::max(abs(maxi1 - mini2), abs(maxi2 - mini1));
    }
};
