public class BeginnerReduceButGrow {
    public static int grow(int[] x){
        int res = 1;
        for (int i : x) {
            res *= i;
        }    
        return res;
    }
}
