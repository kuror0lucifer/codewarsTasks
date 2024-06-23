// Remove anchor from URL
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
Describe(sample_tests)
{
    It(test_1)
    {
        Assert::That(replaceAll("www.codewars.com#about"), Equals("www.codewars.com")); 
    } 
    It(test_2)
    {
        Assert::That(replaceAll("www.codewars.com?page=1"), Equals("www.codewars.com?page=1")); 
    } 
};

*/
std::string replaceAll(std::string str) {
  //:)
  return str.substr(0, std::find(str.begin(), str.end(), '#') - str.begin());  
}
