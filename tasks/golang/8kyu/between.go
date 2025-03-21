package eight_ky

func Between(a, b int) []int {
	var arr []int

	for i := a; i <= b; i++ {
		arr = append(arr, i)
	}

	return arr
}
