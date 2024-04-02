/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/* 
Describe(Tests)
{
    It(works_for_some_examples)
    {
        Assert::That(positive_sum(std::vector <int> {1,2,3,4,5}), Equals(15));
        Assert::That(positive_sum(std::vector <int> {1,-2,3,4,5}), Equals(13));
        Assert::That(positive_sum(std::vector <int> {-1,2,3,4,-5}), Equals(9));
    }
    It(returns_0_when_array_is_empty)
    {
        Assert::That(positive_sum(std::vector <int> {}), Equals(0));
    }
    It(returns_0_when_all_elements_are_negative)
    {
        Assert::That(positive_sum(std::vector <int> {-1,-2,-3,-4,-5}), Equals(0));
    }
};
*/

#include <vector>
#include <numeric>

int positive_sum (const std::vector<int> arr){
  return std::accumulate(arr.begin(), arr.end(), 0, [](const int lhs, const int& i){return i > 0 ? i + lhs : lhs;});
}
