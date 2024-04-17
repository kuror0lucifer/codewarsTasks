// Make a function that does arithmetic!

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// Sample Tests

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;


// public class SolutionTest {
//     @Test
//     public void testBasic() {
//         assertEquals("'add' should return the two numbers added together!", 3, ArithmeticFunction.arithmetic(1, 2, "add"));
//         assertEquals("'subtract' should return a minus b!", 6, ArithmeticFunction.arithmetic(8, 2, "subtract"));
//         assertEquals("'multiply' should return a multiplied by b!", 10, ArithmeticFunction.arithmetic(5, 2, "multiply"));
//         assertEquals("'divide' should return a divided by b!", 4, ArithmeticFunction.arithmetic(8, 2, "divide"));
//     }
// }

public class MakeFunctionThatDoesArithmetic {
    public static int arithmetic(int a, int b, String operator) {
        int res = 0;
        switch (operator.toLowerCase()) {
            case "add":
                res = a + b;
                break;
            case "subtract":
                res = a - b;
                break;
            case "multiply":
                res = a * b;
                break;
            case "divide":
                res = a / b;                
                break;
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println(arithmetic(2, 2, "add"));
    }
}
