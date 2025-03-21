package eight_ky

import (
	"strings"
)

func Meeting(s string) string {

	r := strings.ToUpper(strings.ReplaceAll(s, ":", ", "))
	arr := strings.Split(r, ";")

	for i, v := range arr {
		arr[i] = "(" + v + ")"
	}

	res := strings.Join(arr, "")

	return res

}
