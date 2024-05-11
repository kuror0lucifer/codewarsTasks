/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
Describe(sample_test_cases)
{
    It(should_pass_basic_fixed_tests)
    {
        Assert::That(findNeedle({ "hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk" }),
                      Equals("found the needle at position 5"),
                      ExtraMessage(R"(Incorrect needle position in [ "hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk" ]:)"));

        Assert::That(findNeedle({ "3", "123124234", "None", "needle", "world", "hay", "2", "3" }),
                      Equals("found the needle at position 3"),
                      ExtraMessage(R"(Incorrect needle position in [ "3", "123124234", "None", "needle", "world", "hay", "2", "3" ]:)"));

        Assert::That(findNeedle({ "283497238987234", "a dog", "a cat", "some random junk", "a piece of hay", "needle", "something somebody lost a while ago" }),
                      Equals("found the needle at position 5"),
                      ExtraMessage(R"(Incorrect needle position in [ "283497238987234", "a dog", "a cat", "some random junk", "a piece of hay", "needle", "something somebody lost a while ago" ]:)"));

        Assert::That(findNeedle({ "1", "2", "3", "4", "5", "6", "7", "8", "8", "7", "5", "4", "3", "4", "5", "6", "67", "5", "5", "3", "3", "4", "2", "34", "234", "23", "4", "234", "324", "324", "needle", "1", "2", "3", "4", "5", "5", "6", "5", "4", "32", "3", "45", "54" }),
                      Equals("found the needle at position 30"),
                      ExtraMessage(R"(Incorrect needle position in [ "1", "2", "3", "4", "5", "6", "7", "8", "8", "7", "5", "4", "3", "4", "5", "6", "67", "5", "5", "3", "3", "4", "2", "34", "234", "23", "4", "234", "324", "324", "needle", "1", "2", "3", "4", "5", "5", "6", "5", "4", "32", "3", "45", "54" ]:)"));                     
    }
};
*/

#include <vector>
#include <string>
#include <algorithm>
std::string findNeedle(const std::vector<std::string>& haystack)
{
    // You may use the function std::to_string to convert numbers to strings for easy concatenation. 
    // E.g., ("hi" + std::to_string(123)) ==> "hi123". Of course, that's only one of many approaches.
  auto pos = std::find(haystack.begin(), haystack.end(), "needle");
  
    return "found the needle at position " + std::to_string(std::distance(haystack.begin(), pos));
}
