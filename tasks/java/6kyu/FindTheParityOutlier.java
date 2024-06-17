// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


public class FindTheParityOutlier {
    public static int find(int[] integers) {
        int res = 0;
        if ((integers[0] % 2 == 0 && integers[1] % 2 == 0) ||
            (integers[0] % 2 == 0 && integers[2] % 2 == 0) ||
            (integers[1] % 2 == 0 && integers[2] % 2 == 0)) {
            for (int i : integers) {
                if (i % 2 != 0) {
                    res+= i;
                }
            }
        }
        if ((integers[0] % 2 != 0 && integers[1] % 2 != 0) ||
            (integers[0] % 2 != 0 && integers[2] % 2 != 0) ||
            (integers[1] % 2 != 0 && integers[2] % 2 != 0)) {
            for (int i : integers) {
                if (i % 2 == 0) {
                    res+= i;
                }
            }
        }
        return res;
    }
    public static void main(String[] args) {
        int[] errayTest1 = new int[] {1,2,24,64,22,92};
        System.out.println(find(errayTest1));
    }
}
