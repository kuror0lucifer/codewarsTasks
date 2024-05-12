//Sum of numbers from 0 to N
/*
We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:
> 6
Output:
0+1+2+3+4+5+6 = 21
Input:
> -15
Output:
-15<0
Input:
> 0
Output:
0=0

// TODO: TDD development by writing your own tests as you solve the kata

Describe(SequenceSumTest)
{
    It(testBasic)
    {
        SequenceSum seqsum (6);
        Assert::That(seqsum.showSequence(), Equals("0+1+2+3+4+5+6 = 21"));
    }
};
*/

using namespace std;

class SequenceSum{
  int count;
  public:
  SequenceSum (int);
  string showSequence();
  
};

string SequenceSum::showSequence(){
  if (count < 0) {
    return std::to_string(count) + "<0";
  }
  if (count == 0) {
    return "0=0";
  }
  std::string answ = "0";
  for (int i = 1; i <= count; ++i) {
    answ += "+" + std::to_string(i);
  }
  answ += " = ";
    return answ + std::to_string((count*count+count)/2);
}

SequenceSum::SequenceSum (int c) {
  count = c ;
}
