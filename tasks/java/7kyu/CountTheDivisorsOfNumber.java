//Count the divisors of a number
//
//Count the number of divisors of a positive integer n.
//
//Random tests go up to n = 500000, but fixed tests go higher.
//Examples (input --> output)
//
//4 --> 3 // we have 3 divisors - 1, 2 and 4
//        5 --> 2 // we have 2 divisors - 1 and 5
//        12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
//        30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
//
//Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
//
public class CountTheDivisorsOfNumber {
    public static long numberOfDivisors(int n) {
        long divisors = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisors++;
            }
        }
        return divisors;
    }

    public static void main(String[] args) {
        int n = 12;
        System.out.println(numberOfDivisors(n));
    }
}
