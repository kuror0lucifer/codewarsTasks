//Convert an array of strings to array of numbers
/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
#include <vector>
#include <string>

Describe(Fixed_tests) {
  It(Basic_cases) {
    Assert::That(to_float_array(std::vector<std::string>{"1.1", "2.2", "3.3"}), 
                 Equals(std::vector<float>{1.1, 2.2, 3.3}));
    
    Assert::That(to_float_array(std::vector<std::string>{"1", "2", "3"}), 
                 Equals(std::vector<float>{1, 2, 3}));
    
    Assert::That(to_float_array(std::vector<std::string>{"1.1", "2", "3.35"}), 
                 Equals(std::vector<float>{1.1, 2, 3.35}));
    
    Assert::That(to_float_array(std::vector<std::string>{"1.111"}), 
                 Equals(std::vector<float>{1.111}));
    
    Assert::That(to_float_array(std::vector<std::string>{"356"}), 
                 Equals(std::vector<float>{356}));
    
    Assert::That(to_float_array(std::vector<std::string>{"0"}), 
                 Equals(std::vector<float>{0}));
    
    Assert::That(to_float_array(std::vector<std::string>{}), 
                 Equals(std::vector<float>{}));
  }
};
*/
#include <vector>
#include <string>

std::vector<float> to_float_array(const std::vector<std::string>& arr) {
  std::vector<float> answ;
  for (const auto& str: arr) {
    answ.push_back(std::stof(str));
  }
  return answ;
}
