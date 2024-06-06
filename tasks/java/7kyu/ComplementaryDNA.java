// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

public class ComplementaryDNA {
    public static String makeComplement(String dna) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < dna.length(); i++) {
            if (dna.charAt(i) == 'A') {
                builder.append('T');
            }
            if (dna.charAt(i) == 'T') {
                builder.append('A');
            }
            if (dna.charAt(i) == 'G') {
                builder.append('C');
            }
            if (dna.charAt(i) == 'C') {
                builder.append('G');
            }
        }
        return builder.toString();
    }
    public static void main(String[] args) {
        System.out.println(makeComplement("TAAG"));
    }
}
