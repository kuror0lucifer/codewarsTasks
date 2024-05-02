/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3

void testequal(long long ans,  long long sol) {
    Assert::That(ans, Equals(sol));
}
Describe(findNb_Tests)
{
    It(test1)
    {
        testequal(ASum::findNb(4183059834009), 2022);
        testequal(ASum::findNb(24723578342962), -1);
        testequal(ASum::findNb(135440716410000), 4824);
        testequal(ASum::findNb(40539911473216), 3568);
        testequal(ASum::findNb(26825883955641), 3218);
    }
};
*/
class ASum
{
  public:
  static long long findNb(long long m) {
    long long counter = 0;
    do{
      m -= (counter*counter*counter);
      if (m == 0) {
        return counter;
      }
      ++counter;
    }while (m > 0);
    return -1;
  }
};
