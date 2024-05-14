//Two Oldest Ages
/* 
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
package kata_test

import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "codewarrior/kata"
)

var _ = Describe("TwoOldestAges", func() {
  It("should return 18 and 83 for input []int{6,5,83,5,3,18}", func() {
    Expect(TwoOldestAges([]int{6,5,83,5,3,18})).To(Equal([2]int{18,83}))
  })
  It("should return 45 and 87 for input []int{1,5,87,45,8,8}", func() {
    Expect(TwoOldestAges([]int{1,5,87,45,8,8})).To(Equal([2]int{45,87}))
  })
})
*/

package kata

import "sort"

func TwoOldestAges(ages []int) [2]int {
  sort.Slice(ages, func(i, j int) bool {
		return ages[i] > ages[j]
	})
	return [2]int{ages[1], ages[0]}
}
