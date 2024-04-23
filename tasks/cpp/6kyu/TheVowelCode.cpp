// The Vowel Code
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
/* 
Describe(Sample_Tests) {
  It(Tests) {
    Assert::That(encode("hello"), Equals("h2ll4"));
    Assert::That(encode("How are you today?"), Equals("H4w 1r2 y45 t4d1y?"));
    Assert::That(encode("This is an encoding test."), Equals("Th3s 3s 1n 2nc4d3ng t2st."));
    
    Assert::That(decode("h2ll4"), Equals("hello"));
    Assert::That(decode("H4w 1r2 y45 t4d1y?"), Equals("How are you today?"));
    Assert::That(decode("Th3s 3s 1n 2nc4d3ng t2st."), Equals("This is an encoding test."));
  }
};
*/

#include <string>

std::string encode(const std::string &str) {
  std::string answ = "";
  for (const char c: str) {
    if (c == 'a') {
      answ += std::to_string(1);
    }
    else if (c == 'e') {
      answ += std::to_string(2);
    }
    else if (c == 'i') {
      answ += "3";
    }
    else if (c == 'o') {
      answ += "4";
    } 
    else if (c == 'u') {
      answ += "5";
    } 
    else {
      answ+=c;
    }
  }
  return answ;
}

std::string decode(const std::string &str) {
  std::string answ = "";
  for (const char c: str) {
    if (c == '1') {
      answ += 'a';
    }
    else if (c == '2') {
      answ += 'e';
    }
    else if (c == '3') {
      answ += 'i';
    }
    else if (c == '4') {
      answ += 'o';
    } 
    else if (c == '5') {
      answ += 'u';
    } 
    else {
      answ+=c;
    }
  }
  return answ;
}
