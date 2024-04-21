/*
The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

We will write a function gap with parameters:

g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive)

In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
*/
/*
#include <utility>

void testequal(std::pair <long long, long long> ans, std::pair <long long, long long> sol) {
    Assert::That(ans, Equals(sol));
}
void dotest(int g, long long m, long long n, std::pair <long long, long long> expected)
{
    testequal(GapInPrimes::gap(g, m, n), expected);
}

Describe(gap_Tests)
{
    It(Fixed_Tests)
    {
      dotest(2,100,110, {101, 103});
      dotest(4,100,110, {103, 107});
      dotest(6,100,110, {0, 0});
      dotest(8,300,400, {359, 367});
      dotest(10,300,400, {337, 347});
    }
};
*/

class GapInPrimes
{
public:
    static std::pair<long long, long long> gap(int g, long long m, long long n) {
      std::pair<long long, long long> answ = {0, 0};
      while (m <= n) {
        if(isPrime(m)) {
          answ.second = m;
          if (answ.second - answ.first == g && answ.first) { 
            return answ;
          } else {
            answ.first = answ.second;
          }
        }
        ++m;
      }
      
      return {0, 0};
    }
  
    static bool isPrime(int m){
      if (m == 2 || m == 3)
         return true;

      if (m <= 1 || m % 2 == 0 || m % 3 == 0)
          return false;

       for (int i = 5; i * i <= m; i += 6){
          if (m % i == 0 || m % (i + 2) == 0)
              return false;
       }

       return true;
      }
};
