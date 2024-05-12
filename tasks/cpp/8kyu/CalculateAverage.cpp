//Calculate average
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

const double EPS = 1e-3;

Describe(Calculate_List_Average )
{
    It(Check_Small_Positive_Values)
    {
        Assert::That(calcAverage({2,5}), EqualsWithDelta(3.5, EPS));
        Assert::That(calcAverage({5}), EqualsWithDelta(5, EPS));
        Assert::That(calcAverage({4,2,1}), EqualsWithDelta(2.33333, EPS));
        Assert::That(calcAverage({3,2,5,1}), EqualsWithDelta(2.75, EPS));
        Assert::That(calcAverage({3,2,3,5,1}), EqualsWithDelta(2.8, EPS));
        Assert::That(calcAverage({3,4,2,4,5}), EqualsWithDelta(3.6, EPS));
    }
    
     It(Check_Small_Mixed_Values)
    {
        Assert::That(calcAverage({-2,-6,5,2}), EqualsWithDelta(-0.25, EPS));
        Assert::That(calcAverage({6,-6,9,8}), EqualsWithDelta(4.25, EPS));
        Assert::That(calcAverage({-7,-4,-10,-6,-6}), EqualsWithDelta(-6.6, EPS));
        Assert::That(calcAverage({-3,-8,-10,-6,-5}), EqualsWithDelta(-6.4, EPS));
        Assert::That(calcAverage({-4,-4}), EqualsWithDelta(-4, EPS));
        Assert::That(calcAverage({-5}), EqualsWithDelta(-5, EPS));
    }
    
    It(Check_Medium_Values_and_Size)
    {
        Assert::That(calcAverage({20,14,16,11,20,14,14}), EqualsWithDelta(15.5714, EPS));
        Assert::That(calcAverage({-1,0,-3,10,2,-9,-1}), EqualsWithDelta(-0.285714, EPS));
        Assert::That(calcAverage({15,18,16,17,15,12,16,15}), EqualsWithDelta(15.5, EPS));
        Assert::That(calcAverage({13,11,11,19,12,20,17,16,14}), EqualsWithDelta(14.7778, EPS));
        Assert::That(calcAverage({13,15,13,17,19,20,17,18,13,18}), EqualsWithDelta(16.3, EPS));
        Assert::That(calcAverage({3,7,2,-5,10,8,-7,1}), EqualsWithDelta(2.375, EPS));
    }
    
     It(Check_Larger_Values_and_Size)
    {
        Assert::That(calcAverage({24,30,12,26,23,24,29,12,16,13}), EqualsWithDelta(20.9, EPS));
        Assert::That(calcAverage({-2,-2,1,1,-2,-8,3,-4,-2,1}), EqualsWithDelta(-1.4, EPS));
        Assert::That(calcAverage({20,28,25,11,24,25,22,12,15,12,14,22}), EqualsWithDelta(19.1667, EPS));
        Assert::That(calcAverage({46,35,45,47,25,42,43,40,35,25,48}), EqualsWithDelta(39.1818, EPS));
        Assert::That(calcAverage({-4,6,7,-5,-4,-2,-3,7,7,5,8,-6,5}), EqualsWithDelta(1.61538, EPS));
        Assert::That(calcAverage({22,22,24,15,12,18,22,14,24,23,29,19,22,20,26}), EqualsWithDelta(20.8, EPS));;
    }
    
};
*/

#include <vector>
#include <numeric>
double calcAverage(const std::vector<int>& values){
  return std::accumulate(values.begin(), values.end(), 0.0) / values.size();
}
