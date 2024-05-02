/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

Describe(bumps_tests)
{
    It(basic_tests)
    {
        Assert::That(bumps("n"), Equals("Woohoo!"));
        Assert::That(bumps("__nn_nnnn__n_n___n____nn__nnn"), Equals("Woohoo!"));
        Assert::That(bumps("nnn_n__n_n___nnnnn___n__nnn__"), Equals("Woohoo!"));
        Assert::That(bumps("_nnnnnnn_n__n______nn__nn_nnn"), Equals("Car Dead"));
        Assert::That(bumps("______n___n_"), Equals("Woohoo!"));
        Assert::That(bumps("nnnnnnnnnnnnnnnnnnnnn"), Equals("Car Dead"));
    }
};
*/
#include <string>

std::string bumps(std::string road){
  int i = 0;
  for (char c : road) {
    if (c == 'n') {
      ++i;
    }
  }
  return i <= 15 ? "Woohoo!" : "Car Dead";
}
