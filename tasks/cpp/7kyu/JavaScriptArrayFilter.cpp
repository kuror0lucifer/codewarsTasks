/*
The solution would work like the following:

get_even_numbers({2,4,5,6}) => {2,4,6}
#include <vector>

Describe(Fixed_tests) {
  It(Base_cases) {
    Assert::That(get_even_numbers(std::vector<int>{2, 4, 5, 6}), 
                 Equals(std::vector<int>{2, 4, 6}));
    
    Assert::That(get_even_numbers(std::vector<int>{}), 
                 Equals(std::vector<int>{}));
    
    Assert::That(get_even_numbers(std::vector<int>{1}), 
                 Equals(std::vector<int>{}));
    
    Assert::That(get_even_numbers(std::vector<int>{1, 2}), 
                 Equals(std::vector<int>{2}));
    
    Assert::That(get_even_numbers(std::vector<int>{1, 2, 3, 4, 5}), 
                 Equals(std::vector<int>{2, 4}));
    
    Assert::That(get_even_numbers(std::vector<int>{2, 4, 6, 8}), 
                 Equals(std::vector<int>{2, 4, 6, 8}));
  }
};
*/

#include <vector>

std::vector<int> get_even_numbers(const std::vector<int>& arr) {
  std::vector<int> answ;
  for (int i : arr) {
    if (i % 2 == 0) {
      answ.push_back(i);
    }
  }
  return answ;
}
