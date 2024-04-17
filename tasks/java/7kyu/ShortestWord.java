// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types

import java.util.Arrays;

public class ShortestWord {
    public static int findShort(String s) {
        String[] strArr = s.split(" ");
        String shortestWord = strArr[0];
        for (int i = 0; i < strArr.length; i++) {
            if (shortestWord.length() > strArr[i].length()) {
                shortestWord = strArr[i];
            }
            System.out.println(shortestWord);
        }
        return shortestWord.length();
    }
    public static void main(String[] args) {
        System.out.println(findShort("Helo losd ls a sdl"));
    }
}
