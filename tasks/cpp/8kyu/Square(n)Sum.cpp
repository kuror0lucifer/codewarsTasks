/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 
  */

/*
Describe(test_square_sum)
{
    It(should_pass_some_basic_tests)
    {
        Assert::That(square_sum({1, 2}), Equals(5));
        Assert::That(square_sum({0, 3, 4, 5}), Equals(50));
        Assert::That(square_sum({}), Equals(0));
    }
};
*/
#include <vector>
#include <numeric>

int square_sum(const std::vector<int>& numbers)
{
    return std::accumulate(numbers.begin(), numbers.end(), 0, [](int lhs, int rhs){ return lhs + rhs *rhs;});
}
