/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
*/
/*
#include <string>
#include <vector>

void testequal(std::string ans, std::string sol) {
    Assert::That(ans, Equals(sol));
}
void dotest(const std::vector<std::string> arr, int k, std::string expected)
{
    testequal(LongestConsec::longestConsec(arr, k), expected);
}

Describe(longestConsec_Tests)
{
    It(Fixed__Tests)
    {
        std::vector<std::string> arr = {"zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"};
        dotest(arr, 2, "abigailtheta");
        arr = {"ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"};
        dotest(arr, 1, "oocccffuucccjjjkkkjyyyeehh");
    }
};
*/

#include <string>
#include <vector>
#include <algorithm>
using namespace std;
class LongestConsec
{
public:
    static std::string longestConsec(const std::vector<std::string> &strarr, int k){
      if (strarr.empty() || k > strarr.size() || k <= 0) {
        return "";
      }
      int max = 0;
      int pos_start = 0;
      for (int i = pos_start; i < strarr.size() - k + 1; ++i) {
        int sum_buff = 0;
        for (int j = i; j < i + k; ++j) {
          sum_buff += strarr[j].size();
        }
        if (sum_buff > max) {
          max = sum_buff;
          pos_start = i;
        }
      }
      std::string answ = "";
      for (int i = pos_start; i < pos_start + k; ++i) {
        answ += strarr[i];
      }
      return answ;
    };
};
