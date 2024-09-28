/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net

#include <criterion/criterion.h>

void do_test(const char *digits, int expected);

// TODO: Replace examples and use TDD by writing your own tests

Test(LargestFiveDigitNumberTest, ExampleTests)
{
    do_test("283910", 83910);
    do_test("1234567890", 67890);
    do_test("731674765", 74765);
}
*/

#include <string.h>

int largest_five_digits(const char *digits)
{
  int len_of_num = 5;
  int len_of_str = strlen(digits);
  
  if (len_of_str < len_of_num) {
    return 0;
  }
  
  int pos = 0;
  for (int i = 1; i <= len_of_str - len_of_num; ++i) {
    if (*(digits + pos) - '0' < *(digits + i) - '0') {
      pos = i;
    }
    else if (*(digits + pos) - '0' == *(digits + i) - '0') {
        int j = 1;
        while (*(digits + pos + j) - '0' == *(digits + i + j) - '0') {
            ++j;
        }
        if (*(digits + pos + j) - '0' < *(digits + i + j) - '0') {
            pos = i;
        } 
    }
  }
  
  int answ = 0;
  for (int i = len_of_num; i > 1; --i){
    answ += (*(digits + pos) - '0');
    answ *= 10;
    ++pos;
  }
  answ += *(digits + pos) - '0';
  return answ;
}
