import java.util.Arrays;
//
////Sort and Star
//
//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//The returned value must be a string, and have "***" between each of its letters.
//
//You should not remove or add elements from/to the array.

public class SortAndStar {
    public static String twoSort(String[] s) {
        Arrays.sort(s);
        return String.join("***", s[0].split(""));
    }

    public static void main(String[] args) {
        String[] s = new String[] {"Adsad", "B", "C", "D", "Ebgfds", "Fdsada", "Gdsad", "Hdasda"};
        System.out.println(twoSort(s));
    }
}
