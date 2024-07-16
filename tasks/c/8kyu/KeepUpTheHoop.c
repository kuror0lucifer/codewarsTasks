//Keep up the hoop
/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".

  #include <criterion/criterion.h>
#include <time.h>
#include <stdint.h>
#include <stdlib.h>

char *hoop_count(uint32_t);

Test(ExampleTests, should_pass_all_the_tests_provided) {
    cr_assert_str_eq(hoop_count(6), "Keep at it until you get it");
    cr_assert_str_eq(hoop_count(22), "Great, now move on to tricks");
    cr_assert_str_eq(hoop_count(135), "Great, now move on to tricks");
}*/
#include <stdint.h>

char *hoop_count(uint32_t n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  }
  else {
    return "Keep at it until you get it";
  }
}
