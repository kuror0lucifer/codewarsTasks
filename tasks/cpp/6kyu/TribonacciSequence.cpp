/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
Describe(Basic_tests)
{
    It(Test_1)
    {
        std::vector<int> signature = { 1, 1, 1 };
        std::vector<int> expected = { 1, 1, 1, 3, 5, 9, 17, 31, 57, 105 };
        Assert::That(tribonacci(signature, 10), Equals(expected));
    }
    
    It(Test_2)
    {
        std::vector<int> signature = { 0, 0, 1 };
        std::vector<int> expected = { 0,0,1,1,2,4,7,13,24,44 };
        Assert::That(tribonacci(signature, 10), Equals(expected));
    }
    
    It(Test_3)
    {
        std::vector<int> signature = { 0, 1, 1 };
        std::vector<int> expected = { 0,1,1,2,4,7,13,24,44,81 };
        Assert::That(tribonacci(signature, 10), Equals(expected));
    }
    
    It(Test_4)
    {
        std::vector<int> signature = { 1, 0,  0 };
        std::vector<int> expected = { 1, 0, 0, 1, 1, 2, 4, 7, 13, 24 };
        Assert::That(tribonacci(signature, 10), Equals(expected));
    }
    
    It(Test_5)
    {
        std::vector<int> signature = { 1,2,3 };
        std::vector<int> expected = { 1,2,3,6,11,20,37,68,125,230 };
        Assert::That(tribonacci(signature, 10), Equals(expected));
    }
    
    It(Test_6)
    {
        std::vector<int> signature = { 1,2,3 };
        std::vector<int> expected = { 1,2 };
        Assert::That(tribonacci(signature, 2), Equals(expected));
    }
    
    It(Test_7)
    {
        int third = rand() % 10;
        std::vector<int> signature = { 1,2, third };
        std::vector<int> expected = {};
        Assert::That(tribonacci(signature, 0), Equals(expected));
    }
};
*/

std::vector<int> tribonacci(std::vector<int> signature, int n)
{
  if (n < 3) {
    signature.resize(n);
  }
  for(int i = 3; i<n;i++){
      signature.push_back(signature[i-3]+signature[i-2]+signature[i-1]);
  }
  return signature;
}
