// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

import java.util.Arrays;

public class SplitStrings {
    public static String[] solution(String s) {
        int lenghtStr = s.length();
        if (lenghtStr % 2 != 0) {
            s += "_";
            lenghtStr++;
        }
        
        String[] reStrings = new String[lenghtStr / 2];
        for (int i = 0; i < lenghtStr; i+=2) {
            reStrings[i / 2] = s.substring(i, i + 2);
        }
        return reStrings;
    }
    public static void main(String[] args) {
        String testString1 = "abcdef";
        String testString2 = "abcde";
        
        String[] result1 = solution(testString1);
        String[] result2 = solution(testString2);

        System.out.println(Arrays.toString(result1)); // [ab, cd, ef]
        System.out.println(Arrays.toString(result2)); // [ab, cd, e_]
    }
}
