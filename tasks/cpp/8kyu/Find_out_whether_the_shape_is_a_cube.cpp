// Find out whether the shape is a cube
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
Describe(Sample_Tests)
{
    It(should_return_true)
    {
        Assert::That(true, Equals(is_cube(1, 1)));
        Assert::That(true, Equals(is_cube(8, 2)));
    }
  
    It(should_return_false)
    {
        Assert::That(false, Equals(is_cube(2, 1)));
        Assert::That(false, Equals(is_cube(6, 3)));
        Assert::That(false, Equals(is_cube(-8, -2)));
        Assert::That(false, Equals(is_cube(0, 0)));
        Assert::That(false, Equals(is_cube(200, 4)));
    }
};
*/
bool is_cube(int volume, int side)
{
  return (volume > 0 && side > 0) ? (volume / side / side) == side : false;
}
