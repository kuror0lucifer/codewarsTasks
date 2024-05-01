/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
#include <vector>
#include <utility>

void testequal(std::vector<std::pair <std::string, std::string>> ans, std::vector<std::pair <std::string, std::string>> sol) {
    Assert::That(ans, Equals(sol));
}

Describe(partline_Tests)
{
    It(Fixed_Tests_partlist)
    {
        std::vector<std::string> s = {"cdIw", "tzIy", "xDu", "rThG"};
        std::vector<std::pair <std::string, std::string>> sol = {{"cdIw", "tzIy xDu rThG"}, {"cdIw tzIy", "xDu rThG"}, {"cdIw tzIy xDu", "rThG"}};
        std::vector<std::pair <std::string, std::string>> ans = PartList::partlist(s);
        testequal(ans, sol);

        s = {"I", "wish", "I", "hadn't", "come"};
        sol = {{"I", "wish I hadn't come"}, {"I wish", "I hadn't come"}, {"I wish I", "hadn't come"}, {"I wish I hadn't", "come"}};
        ans = PartList::partlist(s);
        testequal(ans, sol);

        s = {"vJQ", "anj", "mQDq", "sOZ"};
        sol = {{"vJQ", "anj mQDq sOZ"}, {"vJQ anj", "mQDq sOZ"}, {"vJQ anj mQDq", "sOZ"}};
        ans = PartList::partlist(s);
        testequal(ans, sol);
    }
};

  */
class PartList
{
public:
    static std::vector<std::pair <std::string, std::string>> partlist(std::vector<std::string> &arr) {
      std::vector<std::pair <std::string, std::string>> answ;
      std::string first = "";
      bool is_f = true;
      for (size_t i = 0; i < arr.size() - 1; ++i) {
        first += is_f ? arr[i] :" " + arr[i];
        is_f = false;
        std::string second = arr[i + 1];
        for (size_t j = i + 2; j < arr.size(); ++j) {
          second += " " + arr[j];
        }
        answ.push_back({first, second});
      }
      return answ;
    }
};
