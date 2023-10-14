package main

import (
	"fmt"
	"log"
	"net/http"
)

const webPort = "7777"

type Config struct{}

func main() {
	app := Config{}
	log.Printf("Strating broker on port %s\n", webPort)
	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webPort),
		Handler: app.routes(),
	}

	err := srv.ListenAndServe()
	if err != nil {
		log.Panic(err)
	}

}
