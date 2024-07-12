//Odd or Even?
/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
#include <string>
#include <vector>

std::string odd_or_even(const std::vector<int> &arr);

void do_test(const std::vector<int> &arr, const std::string &expected)
{
    Assert::That(odd_or_even(arr), Equals(expected));
}

Describe(sample_test)
{
    It(edge_tests)
    {
        do_test({0}, "even");
        do_test({1}, "odd");
        do_test({}, "even");
    }
    It(even_tests)
    {
        do_test({0, 1, 5}, "even");
        do_test({0, 1, 3}, "even");
        do_test({1023, 1, 2}, "even");
    }
    It(negative_even_tests)
    {
        do_test({0, -1, -5}, "even");
        do_test({0, -1, -3}, "even");
        do_test({-1023, 1, -2}, "even");
    }
    It(odd_tests)
    {
        do_test({0, 1, 2}, "odd");
        do_test({0, 1, 4}, "odd");
        do_test({1023, 1, 3}, "odd");
    }
    It(negative_odd_tests)
    {
        do_test({0, -1, 2}, "odd");
        do_test({0, 1, -4}, "odd");
        do_test({-1023, -1, 3}, "odd");
    }
};*/
#include <string>
#include <vector>
#include <numeric>

std::string odd_or_even(const std::vector<int> &arr)
{
    return (std::accumulate(arr.begin(), arr.end(), 0) % 2 == 0) ? "even" : "odd"; // your code here
}
