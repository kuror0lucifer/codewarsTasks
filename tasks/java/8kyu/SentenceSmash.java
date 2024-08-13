//Sentence Smash
//
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//Example
//
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


import java.util.ArrayList;
import java.util.List;

public class SentenceSmash {
    public static String smash(String... words) {
        List<String> stringList = new ArrayList<String>();
        for (String word : words) {
            stringList.add(word);
        }
        return String.join(" ", stringList);

    }
    public static void main(String[] args) {
        System.out.println(smash("gee", "dsad"));
    }
}
