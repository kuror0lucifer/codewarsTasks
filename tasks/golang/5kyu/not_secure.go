package kyu

import "strings"

func alphanumeric(str string) bool {
	if strings.TrimSpace(str) == "" {
		return false
	}

	b := []byte(str)

	for _, i := range b {
		if !((i >= 65 && i <= 90) || (i >= 97 && i <= 122) || (i >= 48 && i <= 57)) {
			return false
		}
	}
	return true
}
