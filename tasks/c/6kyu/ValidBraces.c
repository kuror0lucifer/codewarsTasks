//Valid Braces
/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
  #include <stdbool.h>
#include <criterion/criterion.h>

extern void do_test (const char *string, bool expected);

Test(tests_suite, sample_tests)
{
	do_test("(((", false);
	do_test(")))", false);
	do_test("(){}[]", true);
	do_test("([{}])", true);
	do_test("(}", false);
	do_test("[(])", false);
	do_test("[({})](]", false);
}*/

#include <stdbool.h>
#include <string.h>

bool valid_braces (const char *braces)
{
  size_t len = strlen(braces);
  char *stack = (char *)malloc(len*sizeof(char));
	int stack_index = -1;
	
	if (len % 2 != 0) 
        return false;

	for (size_t i=0; i<len; i++) {
		switch (braces[i]) {
			case '(': case '[': case '{':
				stack[++stack_index] = braces[i]; break;
			case ')':
				if (stack[stack_index] != '(') return false; 
				else stack[stack_index--] = '\0'; break;
			case ']':
				if (stack[stack_index] != '[') return false; 
				else stack[stack_index--] = '\0'; break;
			case '}':
				if (stack[stack_index] != '{') return false; 
				else stack[stack_index--] = '\0'; break;
		}
	}
	return stack_index == -1; 
}
