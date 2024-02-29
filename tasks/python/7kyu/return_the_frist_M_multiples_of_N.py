# Return the first M multiples of N

# Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

# Ex.
# multiples(3, 5.0)

# should return
# [5.0, 10.0, 15.0]

# SimpleTests:
# @test.it("Sample Tests")
# def sample_tests():
#     test.assert_equals(multiples(3, 5), [5, 10, 15])

def multiples(m, n):
    count = 0
    arr = []
    while  not count == m:
        count = count + 1
        arr.append(n * count)
    return arr 