/**
 * DoubleChar
 */
public class DoubleChar {
    public static String doubleChar(String s){
        StringBuilder str = new StringBuilder("");
        for (int i = 0; i < s.length(); i++) {
            str.append(s.charAt(i)).append(s.charAt(i));
        }
        return str.toString();
    }
    public static void main(String[] args) {
        System.out.println(doubleChar("gelas"));
    }
}