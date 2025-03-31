package main

import (
	"fmt"
	"strings"
)

func CamelCase(s string) string {
	arr := strings.Fields(strings.ToLower(s))

	for i, a := range arr {
		arr[i] = strings.ToUpper(string(a[0])) + a[1:]
	}

	return strings.Join(arr, "")
}

func main() {
	fmt.Print(CamelCase("camel case method"))
}
