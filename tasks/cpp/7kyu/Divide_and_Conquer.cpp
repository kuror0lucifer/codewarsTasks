/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
#include <vector>
#include <variant>
#include <string>
#include <sstream>

// TODO: Replace examples and use TDD by writing your own tests

Describe(Sample_Tests)
{
private:
    std::string stringify(std::vector<std::variant<int, char>>& x) {
      std::stringstream stream;
      stream << "[";
      for( const auto &c : x ) {
        std::visit( [&] ( auto args ) { 
          if ( static_cast<int>( args ) > 47) {
            stream << "'" << args << "'" << ", "; }
          else {
            stream << args << ", ";
            }}, c );
      }
      stream.seekp( -2, stream.cur );
      stream << "]";
      return stream.str();
    }
public:
    It(Examples)
    {
        std::vector<std::variant<int, char>> x;
        x = { 9, 3, '7', '3' };  
        Assert::That( divCon( x ), Equals( 2 ),
                    ExtraMessage( "Incorrect answer for x=" + stringify( x )));
        x = { '5', '0', 9, 3, 2, 1, '9', 6, 7 };
        Assert::That( divCon( x ), Equals( 14 ),
                    ExtraMessage( "Incorrect answer for x=" + stringify( x )));
        x = { '3', 6, 6, 0, '5', 8, 5, '6', 2,'0' };
        Assert::That( divCon( x ), Equals( 13 ),
                    ExtraMessage( "Incorrect answer for x=" + stringify( x )));
        x = { '1', '5', '8', 8, 9, 9, 2, '3' };
        Assert::That( divCon( x ), Equals( 11 ),
                    ExtraMessage( "Incorrect answer for x=" + stringify( x )));
        x = { 8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7 };
        Assert::That( divCon( x ), Equals( 61 ),
                    ExtraMessage( "Incorrect answer for x=" + stringify( x )));
    }
};
*/

#include <vector>
#include <variant>

int divCon(const std::vector<std::variant<int, char>>& x) {
  int sum_n = 0;
  int sum_c = 0;
  for (const auto& i : x) {
    if (std::holds_alternative<int>(i)) {
      sum_n += std::get<int>(i);
    } else {
      sum_c += int(std::get<char>(i) - '0');
    }
  }
  return sum_n - sum_c;
}
