/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
*/

/*
#include <vector>

Describe(Wave_tests)
{
    It(Basic_tests)
    {
        Assert::That(wave("hello"), Equals(std::vector<std::string> {"Hello", "hEllo", "heLlo", "helLo", "hellO"}));
        Assert::That(wave("codewars"), Equals(std::vector<std::string> {"Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"}));
        Assert::That(wave(""), Equals(std::vector<std::string> {}));
        Assert::That(wave("two words"), Equals(std::vector<std::string> {"Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"}));
        Assert::That(wave(" gap "), Equals(std::vector<std::string> {" Gap ", " gAp ", " gaP "}));
    }
};
*/
#include <string>
std::vector<std::string> wave(std::string y){
  //Code Here...
  std::vector<std::string> answ;
  
  for (size_t i = 0; i < y.size(); ++i) {
    std::string buff = y;
    if (y[i] != ' ') {
      buff[i] = std::toupper(y[i]);
      answ.push_back(buff);
    }
  }
  
  return answ;
}
