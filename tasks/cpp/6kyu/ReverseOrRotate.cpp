/*
Reverse or rotate?

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".

#include <string>

void testequal(std::string ans, std::string sol)
{
    Assert::That(ans, Equals(sol));
}
static void dotest(std::string s, unsigned int sz, std::string expected)
{
    testequal(RevRot::revRot(s, sz), expected);
}

Describe(revRot_Tests)
{
    It(Fixed__Tests)
    {
        std::string s = "1234";
        dotest(s, 0, "");
        s = "";
        dotest(s, 0, "");
        s = "733049910872815764";
        dotest(s, 5, "330479108928157");
        s = "73304991087281576455176044327690580265896";
        dotest(s, 8, "1994033775182780067155464327690480265895");
    }
};

#include <string>
#include <math.h>
#include <algorithm>
#include <numeric>

class RevRot
{
public:
    static std::string revRot(const std::string &strng, unsigned int sz) {
      if (sz == 0) { 
        return ""; 
      }
      
      std::string res = strng.substr(0, strng.size() / sz * sz);
  
      for (size_t i = 0; i < res.size(); i += sz){
        auto begin = std::next(res.begin(), i);
        auto end   = std::next(res.begin(), i + sz);
        int sum = std::accumulate(begin, end, 0, [](int total, char &charNum){
          return total + pow( static_cast<int>(charNum - 48), 3 );
        });
        if (sum % 2) { 
          std::rotate(begin, begin + 1, end); 
        }
        else { 
          std::reverse(begin, end); 
        }
      }
  
      return res;
    }
};


*/
