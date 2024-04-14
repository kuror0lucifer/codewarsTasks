// You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

import java.util.Arrays;


public class YouOnlyNeedOneBeginner {
    public static boolean check(Object[] a, Object x) {
        return Arrays.asList(a).stream().anyMatch(s-> s == x);
    }
    public static void main(String[] args) {
        System.out.println(check(new Object[] {66,101}, 66));
    }
}