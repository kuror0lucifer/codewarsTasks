/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

/*
#include <vector>

Describe(Sample_Tests) {
  It(Tests) {
    std::vector<std::vector<int>> v;
    std::vector<int> expected;
    
    v = {{}};
    expected = {};
    Assert::That(snail(v), Equals(expected));
    
    v = {{1}};
    expected = {1};
    Assert::That(snail(v), Equals(expected));
    
    v = {{1,2}, {4,3}};
    expected = {1,2,3,4};
    Assert::That(snail(v), Equals(expected));
    
    v = {{1,2,3}, {8,9,4}, {7,6,5}};
    expected = {1,2,3,4,5,6,7,8,9};
    Assert::That(snail(v), Equals(expected));
    
    v = {{1,2,3,4}, {12,13,14,5}, {11,16,15,6}, {10,9,8,7}};
    expected = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    Assert::That(snail(v), Equals(expected));
  }
};
*/

#include <vector>

std::vector<int> snail(const std::vector<std::vector<int>> &snail_map) {
  std::vector<int> answ;
  int n = snail_map[0].size();
  
  int i = 0, j = 0, marg = 0, k = 0;
  
  while (k < n * n) {
    for (;j < n - marg; ++j, ++k) {
      answ.push_back(snail_map[i][j]);
    }
    for (++i, --j ; i <= j; ++i, ++k) {
      answ.push_back(snail_map[i][j]);
    }
     
    for (--i, --j ; j >= marg; --j, ++k) {
      answ.push_back(snail_map[i][j]);
    }
    for (--i, ++j ; i > j; --i, ++k) {
      answ.push_back(snail_map[i][j]);
    }

    ++i; ++j; ++marg;
  }
  
  return answ;
}
