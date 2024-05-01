/* 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

  Describe(SamplteTests)
{
    It(should_pass_sample_tests)
    {
        Assert::That(add_binary(1, 1), Equals("10"), ExtraMessage("Invalid result for a = 1, b = 1"));
        Assert::That(add_binary(0, 1), Equals("1"), ExtraMessage("Invalid result for a = 0, b = 1"));
        Assert::That(add_binary(1, 0), Equals("1"), ExtraMessage("Invalid result for a = 1, b = 0"));
        Assert::That(add_binary(2, 2), Equals("100"), ExtraMessage("Invalid result for a = 2, b = 2"));
        Assert::That(add_binary(51, 12), Equals("111111"), ExtraMessage("Invalid result for a = 51, b = 12"));
    }
}; */

#include <cstdint>
#include <string>
#include <bitset>

std::string add_binary(uint64_t a, uint64_t b) {
  auto bin_str = std::bitset<64>(a + b).to_string();
  
    return bin_str.erase(0, std::min(bin_str.find_first_of('1'), bin_str.size() - 1));
}
