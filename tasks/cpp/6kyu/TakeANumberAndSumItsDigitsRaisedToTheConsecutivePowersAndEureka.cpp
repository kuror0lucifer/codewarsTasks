/*
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135
=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
𝑎
a, 
𝑏
b that defines the range 
[
𝑎
,
𝑏
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
𝑎
,
𝑏
]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!

  #include <string>
#include <vector>
// TODO: Replace examples and use TDD by writing your own tests

Describe(Sample_Tests)
{
    It(Examples)
    {
        unsigned int a =  1, 
                     b = 10;
        std::vector<unsigned int> result = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a =  1, b = 100, result = {1, 2, 3, 4, 5, 6, 7, 8, 9, 89};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a = 10, b = 100, result = {89};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a = 90, b = 100, result = {};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a = 90, b = 150, result = {135};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a = 50, b = 150, result = {89, 135};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
        a = 10, b = 150, result = {89, 135};
        Assert::That(sumDigPow(a, b), Equals(result), ExtraMessage("Incorrect answer for a="+std::to_string(a) + " b="+std::to_string(b)));
    }
};
*/
#include <vector>
#include <cmath>
std::vector<unsigned int> sumDigPow(unsigned int a, unsigned int b) {
  std::vector<unsigned int> answ;
  for (unsigned int i = a; i <= b; ++i) {
    if (i < 10) {
      answ.push_back(i);
    }
    else {
      std::string buff = "";
      unsigned int sum = 0;
      buff += std::to_string(i);
      for (size_t j = 0; j < buff.size(); ++j) {
        sum += std::pow(int(buff[j] - '0'), j + 1);
      }
      if (sum == i) {
        answ.push_back(i);
      }
    }
  }
  return answ;
}
