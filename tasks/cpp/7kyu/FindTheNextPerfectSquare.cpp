// Find the next perfect square
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
Describe(findNextSquareTests)
{
    It(BasicTests)
    {
        Assert::That(findNextSquare(121), Equals(144));
        Assert::That(findNextSquare(625), Equals(676));
        Assert::That(findNextSquare(319225), Equals(320356));
        Assert::That(findNextSquare(15241383936), Equals(15241630849));
        Assert::That(findNextSquare(155), Equals(-1));
    }
};
*/
#include <cmath>
long int findNextSquare(long int sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  long int num = std::sqrt(sq);
  if (num * num == sq) {
    return (num + 1) * (num + 1);
  }
  return -1;
}
