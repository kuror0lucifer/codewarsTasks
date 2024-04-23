//Matrix Determinant
/*
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
*/
/*
#include <iostream>
#include <vector>

using namespace std;

Describe(your_determinant_function) {
  It(should_work_for_a_few_simple_square_matrices) {
    Assert::That(determinant(vector< vector<long long> > {
      vector<long long> {1}
    }), Equals(1));
    Assert::That(determinant(vector< vector<long long> > {
      vector<long long> {1, 3},
      vector<long long> {2, 5}
    }), Equals(-1));
    Assert::That(determinant(vector< vector<long long> > {
      vector<long long> {2, 5, 3},
      vector<long long> {1, -2, -1},
      vector<long long> {1, 3, 4}
    }), Equals(-20));
  }
};
*/

#include <iostream>
#include <vector>
#include <cmath>

long long determinant(std::vector<std::vector<long long> > a) {
  // TODO: Return the determinant of the square matrix passed in
  int  n = a.size();
  if (n == 1) {
    return a[0][0];
  }
  else if (n == 2) {
    return a[0][0] * a[1][1] - a[0][1] * a[1][0];
  }
  else {
    int d = 0;
    std::vector<std::vector<long long>> m(n - 1, std::vector<long long>(n - 1, 0));
    for (int k = 0; k < n; k++) {
         for (int i = 1; i < n; i++) {
              int t = 0;
              for (int j = 0; j < n; j++) {
                   if (j == k) {
                     continue;
                   }
                   m[i-1][t] = a[i][j];
                   t++;
               }
           }
           d += pow(-1, k + 2) * a[0][k] * determinant(m);
     }
    return d;
  }
}
