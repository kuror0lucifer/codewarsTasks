// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class CountCharactersInYourString {
    public static Map<Character, Integer> count(String str) {
        Map<Character, Integer> mapRes = new HashMap<Character, Integer >();
        char[] charArr = str.toCharArray();
        for (int i = 0; i < charArr.length; i++) {
            int counter = 0;
            char first = charArr[i];
            for (int j = 0; j < charArr.length; j++) {
                if(first == charArr[j]) {
                    counter++;
                }
            }      
            mapRes.put(charArr[i], counter);
        }
        return mapRes;
    }
    public static void main(String[] args) {
        
    }

}
