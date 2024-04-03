/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.*/
/*
void testequal(int ans, int sol) {
    Assert::That(ans, Equals(sol));
}
static void dotest(int n, int d, int expected)
{
    testequal(CountDig::nbDig(n, d), expected);
}
Describe(nbDig_Tests)
{
    It(Fixed_Tests)
    {
        dotest(5750, 0, 4700);
        dotest(11011, 2, 9481);
        dotest(12224, 8, 7733);
    }
};
*/

#include <algorithm>
class CountDig
{
public:
    static int nbDig(int n, int d) {
      std::string buff = "";
      for (int i = 0; i <= n; ++i) {
        buff += std::to_string(i*i);
      }
      return std::count(buff.begin(), buff.end(), std::to_string(d)[0]);
    }
};
