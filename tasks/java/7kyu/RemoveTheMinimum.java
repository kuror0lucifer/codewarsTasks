//Remove the minimum
//
//The museum of incredibly dull things
//
//The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.
//
//        However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.
//Task
//
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.
//
//        Don't change the order of the elements that are left.
//Examples
//
//* Input: [1,2,3,4,5], output = [2,3,4,5]
//        * Input: [5,3,2,1,4], output = [5,3,2,4]
//        * Input: [2,2,1,2,1], output = [2,2,2,1]
//

import java.util.Arrays;

public class RemoveTheMinimum {
    public static int[] removeSmallest(int[] numbers) {
        if (numbers.length == 0) {
            return new int[0];
        }

        int min = numbers[0];
        int index = 0;
        for (int i = 1; i < numbers.length; i++) {
            if(numbers[i] < min) {
                min = numbers[i];
                index = i;
            }
        }
        int[] result = new int[numbers.length - 1];
        for (int i = 0, j = 0; i < numbers.length; i++) {
            if(i != index) {
                result[j++] = numbers[i];
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(removeSmallest(new int[]{1, 2, 3, 4, 5}))); // [2, 3, 4, 5]
        System.out.println(Arrays.toString(removeSmallest(new int[]{5, 3, 2, 1, 4}))); // [5, 3, 2, 4]
        System.out.println(Arrays.toString(removeSmallest(new int[]{2, 2, 1, 2, 1}))); // [2, 2, 2, 1]
    }
}
