package eight_ky

const (
	SEC  = 1000
	MIN  = SEC * 60
	HOUR = MIN * 60
)

func Past(h, m, s int) int {
	return h*HOUR + m*MIN + s*SEC
}
