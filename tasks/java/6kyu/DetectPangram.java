// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


import java.util.stream.IntStream;


public class DetectPangram {
    public static boolean check(String sentence){
        return IntStream.range(65, 91).noneMatch(c -> sentence.toUpperCase().indexOf((char) c) < 0);
    }
    public static void main(String[] args) {
        System.out.println(check("The quick brown fox jumps over the lazy dog."));
    }
}
