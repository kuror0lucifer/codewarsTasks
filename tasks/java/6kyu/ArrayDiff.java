// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayDiff {
    public static int[] arrayDiff(int[] a, int[] b) {
        List<Integer> resultList = new ArrayList<>();
        
        // Преобразование массива b в список для удобства проверки наличия элементов
        List<Integer> bList = new ArrayList<>();
        for (int num : b) {
            bList.add(num);
        }
        
        // Проверка каждого элемента массива a
        for (int num : a) {
            // Если элемента нет в списке b, добавляем его в результат
            if (!bList.contains(num)) {
                resultList.add(num);
            }
        }
        
        // Преобразование списка обратно в массив
        int[] resultArray = new int[resultList.size()];
        for (int i = 0; i < resultList.size(); i++) {
            resultArray[i] = resultList.get(i);
        }
        
        return resultArray;
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(arrayDiff(new int[]{1,2,2}, new int[]{1,2,2})));
    }    
}

