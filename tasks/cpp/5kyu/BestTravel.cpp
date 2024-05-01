/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Notes:
try not to modify the input list of distances ls
in some languages this "list" is in fact a string (see the Sample Tests).

  void testequal(int ans, int sol) {
    Assert::That(ans, Equals(sol));
}
Describe(Tests)
{
    It(Fixed_chooseBestSum)
    {
        std::vector<int> ts = {50, 55, 56, 57, 58};
        int n = BestTravel::chooseBestSum(163, 3, ts);
        testequal(n, 163);
        ts = {50};
        n = BestTravel::chooseBestSum(163, 3, ts);
        testequal(n, -1);
        ts = {91, 74, 73, 85, 73, 81, 87};
        n = BestTravel::chooseBestSum(230, 3, ts);
        testequal(n, 228);
        n = BestTravel::chooseBestSum(331, 2, ts);
        testequal(n, 178);
        n = BestTravel::chooseBestSum(331, 4, ts);
        testequal(n, 331);
        n = BestTravel::chooseBestSum(331, 5, ts);
        testequal(n, -1);
        n = BestTravel::chooseBestSum(331, 1, ts);
        testequal(n, 91);
        n = BestTravel::chooseBestSum(700, 8, ts);
        testequal(n, -1);
    }
};
*/

class BestTravel
{
public:
    static int chooseBestSum(int t, int k, std::vector<int>& ls) {
      if (ls.size() < k) {
        return -1;
      }
      int max = -1;
      int sum;
      std::string bits(k, 1);
      bits.resize(ls.size(), 0);
      do {
        sum = 0;
        for (size_t i = 0; i < ls.size(); ++i) {
          if (bits[i]) {
            sum += ls[i];
          }
        }
        if (sum >= max && sum <= t) {
          max = sum;
        }
      } while (std::prev_permutation(bits.begin(), bits.end()));
      
      return max;
    }
};
