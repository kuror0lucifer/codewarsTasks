//Integers: Recreation One
/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
#include <utility>
#include <vector>

using Result = std::vector<std::pair<long long, long long>>;
void testequal(const Result& ans, const Result& sol)
{
    Assert::That(ans, Equals(sol));
}
void dotest(long long m, long long n, const Result& expected)
{
    testequal(SumSquaredDivisors::listSquared(m, n), expected);
}

Describe(listSquared_Tests)
{
    It(Fixed_Tests)
    {
        dotest(1, 250, {{1, 1}, {42, 2500}, {246, 84100}});
        dotest(42, 250, {{42, 2500}, {246, 84100}});
        dotest(250, 500, {{287, 84100}});
        dotest(300, 600, {});
    }
};
*/

#include <utility>
#include <vector>
#include <cmath>

class SumSquaredDivisors
{
public:
    static std::vector<std::pair<long long, long long>> listSquared(long long m, long long n) {
      std::vector<std::pair<long long, long long>> answ;
      for (long long i = m; i <= n; ++i) { 
        long long sum = 0;
        for (long long j = 1; j * j <= i; ++j) {
          if (i % j == 0) {
            sum += j * j;
            if (j * j != i) {
              sum += (i / j) * (i / j);
            }
          } 
        }
        long long sqrRoot = static_cast<long long>(sqrt(sum));
        if (sqrRoot * sqrRoot == sum) {
          answ.push_back({i, sum});
        }
      }
        
      return answ;
    }
};
