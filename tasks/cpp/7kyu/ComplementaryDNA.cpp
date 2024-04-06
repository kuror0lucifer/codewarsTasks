/* 
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Describe(ExampleTests)
{
    It(BasicTests)
    {
        Assert::That(DNAStrand("AAAA"), Equals("TTTT"));
        Assert::That(DNAStrand("ATTGC"), Equals("TAACG"));
        Assert::That(DNAStrand("GTAT"), Equals("CATA"));
    }
};
*/

#include <string>

std::string DNAStrand(const std::string& dna)
{
  std::string answ = "";
  for (const char& c: dna) {
    if (c == 'A') {
      answ += 'T';
    } 
    else if (c == 'T') {
      answ += 'A';
    } 
    else if (c == 'G') {
      answ += 'C';
    }
    else if (c == 'C') {
      answ += 'G';
    }
  }
  return answ;
}
