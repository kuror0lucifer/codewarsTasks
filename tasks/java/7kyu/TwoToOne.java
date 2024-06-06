// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


import java.util.Arrays;
import java.util.HashSet;

import java.util.Set;

public class TwoToOne {
    public static String longest (String s1, String s2) {
        Set<Character> dSet = new HashSet<>();
        for (char c : (s1 + s2).toCharArray()) {
            dSet.add(c);
        }
        char[] charArr = new char[dSet.size()];
        int index = 0;
        for (char c : dSet) {
            charArr[index++] = c;
        }
        Arrays.sort(charArr);
        
        return new String(charArr);
    }
    public static void main(String[] args) {
        System.out.println(longest("2321", "null"));
    }
}
