/*
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
*/

/* 
Describe(Sample_Tests)
{
    It(Tests)
    {
        std::vector<std::pair<int, int>> intervals = {{1, 5}};
        Assert::That(sum_intervals(intervals), Equals(4));
        
        intervals = {{1, 5}, {6, 10}};
        Assert::That(sum_intervals(intervals), Equals(8));
      
        intervals = {{1, 4}, {7, 10}, {3, 5}};
        Assert::That(sum_intervals(intervals), Equals(7));
    }
  
    It(Large_Intervals)
    {
        std::vector<std::pair<int, int>> intervals = {{-1000000000, 1000000000}};
        Assert::That(sum_intervals(intervals), Equals(2000000000));
        
        intervals = {{0, 20}, {-100000000, 10}, {30, 40}};
        Assert::That(sum_intervals(intervals), Equals(100000030));
    }
};
*/

#include <vector>
#include <utility>
#include <algorithm>

int sum_intervals(std::vector<std::pair<int, int>> intervals) {
  int sum = 0;
  std::sort(intervals.begin(), intervals.end(), [](auto& lhs, auto& rhs){
    return lhs.first < rhs.first;
  });
  
  int begin = intervals[0].first;
  int end = intervals[0].second;
  
  for (const auto& interval : intervals) {
    if (interval.first <= end) {
      end = std::max(end, interval.second);
    } 
    else {
      sum += end - begin;
      begin = interval.first;
      end = interval.second;
    }
  }
  
  sum += end - begin;
  
  return sum;
}
