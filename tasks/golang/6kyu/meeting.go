package eight_ky

import (
	"fmt"
	"sort"
	"strings"
)

func Meeting(s string) string {
	r := strings.Split(s, ";")

	var formattedR []string

	for _, g := range r {
		parts := strings.Split(g, ":")
		if len(parts) == 2 {
			fistName := strings.ToUpper(parts[0])
			lastName := strings.ToUpper(parts[1])
			formattedR = append(formattedR, fmt.Sprintf("(%s, %s)", lastName, fistName))
		}
	}

	sort.Slice(formattedR, func(i, j int) bool {
		return formattedR[i] < formattedR[j]
	})

	return strings.Join(formattedR, "")
}
