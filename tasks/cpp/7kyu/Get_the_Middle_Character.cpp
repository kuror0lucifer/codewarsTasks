/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
Describe(get_middle_algorithm)
{
    It(should_handle_basic_tests)
    {
        Assert::That(get_middle("test"), Equals("es"));
        Assert::That(get_middle("testing"), Equals("t"));;
    }
};
*/

std::string get_middle(std::string input) 
{
  if (input.size() % 2 == 0) {
    return input.substr(input.size() / 2 - 1, 2);
  } else {
    return input.substr(input.size() / 2, 1);
  }
  // return the middle character(s)
}
