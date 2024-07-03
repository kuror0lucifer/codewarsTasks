//Sum of two lowest positive integers
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
Describe(Tests)
{
    It(BasicTest)
    {
        long expected = 13;
        
        long actual = sumTwoSmallestNumbers({ 5, 8, 12, 19, 22 });
    
        Assert::That(actual, Is().EqualTo(expected));
    }
};
  */
#include <vector>

long sumTwoSmallestNumbers(std::vector<int> numbers)
{
  long min_one, min_two;
  if (numbers[0] < numbers[1]) {
    min_one = numbers[0];
    min_two = numbers[1];
  } else {
    min_one = numbers[1];
    min_two = numbers[0];
  }
  
  for (size_t i = 2; i < numbers.size(); ++i) {
    if (numbers[i] < min_one){
      min_two = min_one;
      min_one = numbers[i];
    }
    else if (numbers[i] < min_two){
      min_two = numbers[i];
    }
  }
    return min_one + min_two;
}
