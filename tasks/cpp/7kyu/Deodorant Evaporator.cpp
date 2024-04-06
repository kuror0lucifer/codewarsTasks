/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

using namespace std;

void testequal(int ans, int sol) {
    Assert::That(ans, Equals(sol));
}

Describe(evaporator_Tests)
{
    It(test1)
    {
    	testequal(Evaporator::evaporator(10, 10, 10), 22);
    	testequal(Evaporator::evaporator(10, 10, 5), 29);
	}
};
*/

using namespace std;
class Evaporator
{

  public:
  static int evaporator(double content, double evap_per_day, double threshold) {
    int answ = 0;
    double min_capacity = content * (threshold / 100.);
    while (content > min_capacity) {
      content -= content * (evap_per_day / 100.);
      ++answ;
    }
    return answ;
  }
};
