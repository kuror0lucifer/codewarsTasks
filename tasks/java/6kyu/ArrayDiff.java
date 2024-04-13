// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayDiff {
    public static int[] arrayDiff(int[] a, int[] b) {
        List<Integer> resultList = new ArrayList<>();
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b.length; j++) {
                if (a[i] != b[j]) {
                    resultList.add(a[i]);
                }
            }
        }
        int [] resArr = new int[resultList.size()];
        for (int i = 0; i < resultList.size(); i++) {
            resArr[i] = resultList.get(i);
        }
        return resArr;
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(arrayDiff(new int[]{1,2,2,3}, new int[]{2})));
    }    
}

