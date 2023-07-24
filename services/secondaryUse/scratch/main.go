package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/instamenta/rssag/internal/database"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

type apiConfig struct {
	DB *database.Queries
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}

	portString := os.Getenv("PORT")
	if portString == "" {
		log.Fatal("PORT is not found")
	}

	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		log.Fatal("dbURL is not found")
	}

	conn, err := sql.Open("posgres", dbURL)
	if err != nil {
		log.Fatal("can't connect to DB")
	}

	apiCfg := apiConfig{
		DB: database.New(conn),
	}

	fmt.Println("Port:", portString)

	router := chi.NewRouter()

	router.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300,
	}))

	v1Router := chi.NewRouter()
	v1Router.Get("/healthz", handlerReadiness)
	v1Router.Get("/err", handleErr)
	v1Router.Post("/err", handleErr)
	
	router.Mount("/users", apiCfg.handlerCreateUser)

	srv := &http.Server{
		Handler: router,
		Addr:    ":" + portString,
	}
	log.Printf("Server starting on port: %v", portString)
	err = srv.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}

}
