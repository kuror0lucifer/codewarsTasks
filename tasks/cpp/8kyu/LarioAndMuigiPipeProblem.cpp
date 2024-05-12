//Lario and Muigi Pipe Problem
/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
#include <vector>

Describe(Fixed_tests) {
  It(Sample_cases) {
    Assert::That(pipe_fix(std::vector<int>{1, 2, 3, 5, 6, 8, 9}), 
                 Equals(std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8, 9}));
    
    Assert::That(pipe_fix(std::vector<int>{1, 2, 3, 12}), 
                 Equals(std::vector<int>{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}));
    
    Assert::That(pipe_fix(std::vector<int>{6, 9}), 
                 Equals(std::vector<int>{6, 7, 8, 9}));
    
    Assert::That(pipe_fix(std::vector<int>{-1, 4}), 
                 Equals(std::vector<int>{-1, 0, 1, 2, 3, 4}));
    
    Assert::That(pipe_fix(std::vector<int>{1, 2, 3}), 
                 Equals(std::vector<int>{1, 2, 3}));
    
    Assert::That(pipe_fix(std::vector<int>{1}), 
                 Equals(std::vector<int>{1}));
  }
};
*/

#include <vector>

std::vector<int> pipe_fix(const std::vector<int>& nums) {
  std::vector<int> answ;
  answ.reserve(nums.size() * 2);
  for (int i = nums.front(); i <= nums.back(); ++i) {
    answ.push_back(i);
  }
  return answ;
}
