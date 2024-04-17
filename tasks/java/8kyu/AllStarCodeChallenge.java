// All Star Code Challenge

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Notes

//     The first argument can be an empty string
//     In languages with no distinct character data type, the second argument will be a string of length 1

//     Sample Tests

//     import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;

// public class basicTests {
//     @Test
//     public void testSomething() {
//          assertEquals(1, CodeWars.strCount("Hello", 'o'));
//          assertEquals(2, CodeWars.strCount("Hello", 'l'));
//          assertEquals(0, CodeWars.strCount("",'z'));
//     }
// }

public class AllStarCodeChallenge {
    public static int strCount(String str, char letter) {
        char[] arrStr = str.toCharArray();
        int counter = 0;
        for (int i = 0; i < arrStr.length; i++) {
            if (arrStr[i] == letter) {
                counter++;
            }
        }
        return counter;
        // return (int)str.chars().filter(x -> x == letter).count();
    }
    public static void main(String[] args) {
        System.out.println(strCount("Hello",'l'));
    }
}
