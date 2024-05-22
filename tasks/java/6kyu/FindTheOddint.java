
// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class FindTheOddint {
    public static int findIt(int[] a) {
        Map<Integer, Integer> ArrMap = new HashMap<>();
        
        for (int i : a) {
            ArrMap.put(i, ArrMap.getOrDefault(i, 0)+1); //подсчет количества повторок числа (ключ числоБ значение - его количество)
        }

        for (Map.Entry<Integer, Integer> entry : ArrMap.entrySet()) { // интерфейс Entry который позволяет работать с записями в мапе
            if (entry.getValue() % 2 != 0) {                          // ArrMap.entySet() - Хранит лист ключ-значение есть еще keySet и value
                return entry.getKey();
            }
        }
        return -1;
    }
    
}
