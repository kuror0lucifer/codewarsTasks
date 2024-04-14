// Cat years, Dog years

// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only

// Cat Years

//     15 cat years for first year
//     +9 cat years for second year
//     +4 cat years for each year after that

// Dog Years

//     15 dog years for first year
//     +9 dog years for second year
//     +5 dog years for each year after that

//     import org.junit.Test;
// import static org.junit.Assert.assertArrayEquals;
// import org.junit.runners.JUnit4;


// public class ExampleTest {

//   @Test
//   public void one() {
//     assertArrayEquals(new int[]{1,15,15}, Dinglemouse.humanYearsCatYearsDogYears(1)); 
//   }
  
//   @Test
//   public void two() {
//     assertArrayEquals(new int[]{2,24,24}, Dinglemouse.humanYearsCatYearsDogYears(2)); 
//   }

//   @Test
//   public void ten() {
//     assertArrayEquals(new int[]{10,56,64}, Dinglemouse.humanYearsCatYearsDogYears(10)); 
//   }

// }

import java.util.Arrays;

public class CatYearsDogYears {
    public static int[] humanYearsCatYearsDogYears(final int humanYears) {
        int catYears =0, dogYears = 0;
        switch (humanYears) {
            default:
                catYears = 4 * (humanYears - 2);
                dogYears = 5 * (humanYears - 2);
            case 2:
                catYears += 9;
                dogYears += 9;
            case 1:
                catYears += 15;
                dogYears += 15;
        }
    return new int[]{humanYears, catYears, dogYears};
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(humanYearsCatYearsDogYears(10)));
    }
}
