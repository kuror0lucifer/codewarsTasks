/*
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
Describe(Example_from_description)
{
    It(should_do_something)
    {
        Assert::That(decodeMorse(".... . -.--   .--- ..- -.. ."), Equals("HEY JUDE"));
    }
};
Describe(Your_own_tests)
{
  // Add more tests here
};
#include <string>

std::string decodeMorse(const std::string& morseCode) {
    std::string buff = morseCode;
    buff += " ";
    std::string decoded;
    auto pos = buff.find(" ");
    while (pos != std::string::npos) {
      decoded += MORSE_CODE[buff.substr(0, pos)];
      if (buff[pos + 1] == ' ' && buff[pos + 2] == ' ')
        decoded += " ";
      
      buff.erase(0, pos + 1);
      pos = buff.find(" ");
    }
  
    while (decoded[0] == ' ' || decoded[decoded.size() - 1] == ' ') {
      if (decoded[0] == ' ')
        decoded.erase(0, 1);
      if (decoded[decoded.size() - 1] == ' ')
        decoded.erase(decoded.size() - 1);
    }
  
    return decoded;
}
*/
