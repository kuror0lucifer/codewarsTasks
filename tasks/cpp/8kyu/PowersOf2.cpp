//Powers of 2
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

#include <vector>
#include <cstdint>

Describe(Fixed_tests) {
  It(Sample_cases) {
    Assert::That(powers_of_two(0),  Equals(std::vector<uint64_t>{1}));
    Assert::That(powers_of_two(2),  Equals(std::vector<uint64_t>{1, 2, 4}));
    Assert::That(powers_of_two(4),  Equals(std::vector<uint64_t>{1, 2, 4, 8, 16}));
    Assert::That(powers_of_two(10), Equals(std::vector<uint64_t>{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024}));
  }
};
*/

#include <vector>
#include <cstdint>
#include <cmath>

std::vector<uint64_t> powers_of_two(int n) {
  if (0 == n) {
    return {1};
  }
  std::vector<uint64_t> answ(n + 1, 1);
  for (int i = 0; i <= n; ++i) {
    answ[i] *= std::pow(2, i);
  }
  return answ;
}
