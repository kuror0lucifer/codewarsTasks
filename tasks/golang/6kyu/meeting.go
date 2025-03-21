package eight_ky

import (
	"sort"
	"strings"
)

func Meeting(s string) string {

	r := strings.ToUpper(strings.ReplaceAll(s, ":", ", "))
	arr := strings.Split(r, ";")

	sort.Slice(arr, func(i, j int) bool {

	})

	for i, v := range arr {
		arr[i] = "(" + v + ")"
	}

	res := strings.Join(arr, "")

	return res

}
