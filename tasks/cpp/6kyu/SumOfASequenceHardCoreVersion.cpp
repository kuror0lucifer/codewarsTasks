// Sum of a Sequence [Hard-Core Version]
/*
As the title suggests, this is the hard-core version of another neat kata.

The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

sequenceSum(2,2,2) === 2
sequenceSum(2,6,2) === 12 // 2 + 4 + 6
sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
sequenceSum(1,5,3) === 5 // 1 + 4
If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.
// TODO: Replace examples and use TDD development by writing your own tests

Describe(Basic_tests)
{
    It(test_1)
    {
        Assert::That(sequence_sum(2, 6, 2), Equals(12));
    }
    It(test_2)
    {
        Assert::That(sequence_sum(1, 5, 1), Equals(15));
    }
    It(test_3)
    {
        Assert::That(sequence_sum(1, 5, 3), Equals(5));
    }
    It(test_4)
    {
        Assert::That(sequence_sum(-1, -5, -3), Equals(-5));
    }
    It(test_5)
    {
        Assert::That(sequence_sum(16, 15, 3), Equals(0));
    }
    It(test_6)
    {
        Assert::That(sequence_sum(780, 6851543, 5), Equals(4694363402480));
    }
    It(test_7)
    {
        Assert::That(sequence_sum(9383, 71418, 2), Equals(1253127200));
    }
    It(test_8)
    {
        Assert::That(sequence_sum(20, 673388797, 5), Equals(45345247259849570));
    }
};
*/
#include <cmath>
long long int sequence_sum(long long int begin_number, long long int end_number, long long step){
    long long int sum = 0;
    if (begin_number < 0 && end_number < 0)
    {
        if (begin_number < end_number && step < 0)
            return sum;
        if (begin_number > end_number && step > 0)
            return sum;

        int n = (-end_number + begin_number) / -step;

        return ((n + 1) * (begin_number + begin_number + n * step) / 2);
    }

    if (begin_number > end_number && step > 0 || (begin_number < end_number && step < 0)) {
        return sum;
    }

    int n = (end_number - begin_number) / step;

    return (n + 1) * (begin_number + begin_number + n * step) / 2;
}
