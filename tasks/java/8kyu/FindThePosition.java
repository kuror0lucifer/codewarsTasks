// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

public class FindThePosition {
    public static String position(char alphabet){
        String res = "Position of alphabet: ";
        return res + (Character.valueOf(alphabet).toUpperCase(alphabet) - 64);
    }
    public static void main(String[] args) {
        System.out.println(position('c'));
    }
}
