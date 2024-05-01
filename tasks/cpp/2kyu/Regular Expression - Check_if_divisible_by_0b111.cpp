/*
Create a regular expression capable of evaluating binary strings (which consist of only 1's and 0's) and determining whether the given string represents a number divisible by 7.

Note:

Empty strings should be rejected.
Your solution should reject strings with any character other than 0 and 1.
No leading 0's will be tested unless the string exactly denotes 0.

  #include <regex>

std::string int_to_bin(int i) {
  std::string str = std::bitset<64>(i).to_string();
  return str.erase(0, std::min(str.find_first_not_of('0'), str.size()-1));
}
Describe(tests)
{
    It(edge_cases)
    {
        std::cout << "Testing for: empty string" << std::endl;
        Assert::That(std::regex_match("", solution), Equals(false));
        std::cout << "Testing for: 0" << std::endl;
        Assert::That(std::regex_match("0", solution), Equals(true));
    }
    It(fixed_tests_100)
    {
        for(int i=1; i<=100; i++) {
          std::cout << "Testing for: " << i << std::endl;
          Assert::That(std::regex_match(int_to_bin(i), solution), Equals(i%7 == 0));
        }
    }
};*/

#include <regex>
// Write a regular expression to detect whether a binary number is divisible by 7
std::regex solution = std::regex("^(0|(10((0|11)(1|00))*(10|(0|11)01)|11)(01*0(0|101|1(1|00)((0|11)(1|00))*(10|(0|11)01)))*1)+$");
