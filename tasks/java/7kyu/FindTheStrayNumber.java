// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


import java.util.Arrays;


public class FindTheStrayNumber {
    public static int stray(int[] numbers) {
        Arrays.sort(numbers);
        return numbers[0] != numbers[1] ? numbers[0] : numbers[numbers.length - 1];
    }
    public static void main(String[] args) {
        int[] same = new int[] {2,1,1};
        System.out.println(stray(same));
    }
}
