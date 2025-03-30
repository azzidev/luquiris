package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Backend em Go está rodando!")
	})

	fmt.Println("Servidor rodando na porta 8080")
	http.ListenAndServe(":8080", nil)
}
