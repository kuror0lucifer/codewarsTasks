public class NumberOfPeopleInTheBus {
    public static int countPassengers(ArrayList<int[]> stops) {
        int passengers = 0;
            for (int[] stop : stops) {
                passengers += stop[0];
                passengers -= stop[1];
            }
            return passengers;
      }
}
