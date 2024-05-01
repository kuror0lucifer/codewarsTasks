/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
  Describe(simpleMultiplicationTest)
{
    It(multiply)
    {
        Assert::That(simpleMultiplication(2), Equals(16));
        Assert::That(simpleMultiplication(1), Equals(9));
        Assert::That(simpleMultiplication(8), Equals(64));
        Assert::That(simpleMultiplication(4), Equals(32));
        Assert::That(simpleMultiplication(5), Equals(45));
    }
};
*/
int simpleMultiplication(int a){
    return (a % 2 == 0) ? 8 * a : 9 * a; 
}
