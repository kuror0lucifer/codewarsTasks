// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
// A tower block is represented with "*" character.

/* 
Describe(Tests)
{
    It(ExampleTest1)
    {
        std::vector<std::string> expected = { "*" };
 
        std::vector<std::string> actual = towerBuilder(1);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
    It(ExampleTest2)
    {
        std::vector<std::string> expected = { " * ", "***" };
        
        std::vector<std::string> actual = towerBuilder(2);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
    It(ExampleTest3)
    {
        std::vector<std::string> expected = { "  *  ", " *** ", "*****" };
        
        std::vector<std::string> actual = towerBuilder(3);
    
        Assert::That(actual, Is().EqualTo(expected));
    }
};*/

#include <string>
#include <vector>

std::vector<std::string> towerBuilder(unsigned nFloors) {
  std::vector<std::string> answ;
  auto max_lenght = 2 * nFloors - 1;
  for (auto i = 1; i < nFloors; i++) {
    auto size = 2 * i - 1;
    std::string buff(max_lenght, ' ');
    size_t j;
    if (i == 1) {
        j = max_lenght / 2;
    }
    else if (i == nFloors - 1) {
            j = max_lenght - size - 1;
    } else {
        j = max_lenght / 2 - size / 2;
    }
    for (size_t pos = j; pos < j + size; pos++){
      buff[pos] = '*';
    }
    answ.push_back(std::move(buff));
  }
  answ.push_back(std::string(max_lenght, '*'));
  return answ;
}
