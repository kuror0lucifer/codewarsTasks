// Minimize Sum Of Array 
/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
Describe(Minimum_Sum_)
{
    It(return_minmum_Sum_Of_Numbers)
    {
        Assert::That(minSum({5,4,2,3}), Equals(22));
          Assert::That(minSum({12,6,10,26,3,24}), Equals(342));
            Assert::That(minSum({9,2,8,7,5,4,0,6}), Equals(74));
        
    }
};
*/

#include <vector>
#include <algorithm>
using namespace std;

int minSum (vector<int>passed)
{
  std::sort(passed.begin(), passed.end());
  int sum = 0;
  for (size_t i = 0; i < passed.size() / 2; ++i){
    sum += passed[i] * passed[passed.size() - 1 - i];
  }
  return sum; 
}
