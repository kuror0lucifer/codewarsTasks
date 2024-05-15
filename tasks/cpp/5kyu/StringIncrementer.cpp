// String incrementer
/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

// TODO: Replace examples and use TDD by writing your own tests

Describe(SampleTest)
{
    It(ExampleTests)
    {
        do_test("foobar000", "foobar001");
        do_test("foo", "foo1");
        do_test("foobar001", "foobar002");
        do_test("foobar99", "foobar100");
        do_test("foobar099", "foobar100");
        do_test("", "1");
    }
};
*/
#include <string>

std::string incrementString(const std::string &str)
{
  if (std::isdigit(str.back())) {
    int value = str.back() - '0';
    if (value == 9) {
      return incrementString(str.substr(0, str.size() - 1)) + "0";
    } else {
      return str.substr(0, str.size() - 1) + std::to_string(value + 1);
    }
  }
    return str + '1'; // you code here
}
