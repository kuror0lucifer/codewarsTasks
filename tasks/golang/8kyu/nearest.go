package eight_ky

import (
	"math"
)

func NearestSq(n int) int {
	if n < 0 {
		return 0
	}

	sqrtN := math.Sqrt(float64(n))

	nf := int(math.Floor(sqrtN))
	nc := int(math.Ceil(sqrtN))

	nfSq := nf * nf
	ncSq := nc * nc

	if (ncSq - n) < (n - nfSq) {
		return ncSq
	}
	return nfSq
}
