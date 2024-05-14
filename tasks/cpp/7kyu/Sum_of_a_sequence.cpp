// Sum of a sequence
/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
Describe(Tests)
{
    It(ExampleTests)
    {
        Assert::That(sequenceSum(2, 6, 2), Is().EqualTo(12));
        Assert::That(sequenceSum(1, 5, 1), Is().EqualTo(15));
        Assert::That(sequenceSum(1, 5, 3), Is().EqualTo(5));
        Assert::That(sequenceSum(0, 15, 3), Is().EqualTo(45));
        Assert::That(sequenceSum(16, 15, 3), Is().EqualTo(0));
        Assert::That(sequenceSum(2, 24, 22), Is().EqualTo(26));
        Assert::That(sequenceSum(2, 2, 2), Is().EqualTo(2));
        Assert::That(sequenceSum(2, 2, 1), Is().EqualTo(2));
        Assert::That(sequenceSum(1, 15, 3), Is().EqualTo(35));
        Assert::That(sequenceSum(15, 1, 3), Is().EqualTo(0));    
    }
};;
*/

int sequenceSum(int start, int end, int step)
{
  int sum = 0;
  for (int i = start; i <= end; i += step) {
    sum += i;
  }
  return sum;
}
