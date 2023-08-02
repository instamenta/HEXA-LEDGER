package main

import (
	"flag"
	"fmt"
	"log"
)

func seedAccount(store Storage, fname, lname, pw string) *Account {
	acc, err := NewAccount(fname, lname, pw)
	if err != nil {
		log.Fatal(err)
	}
	err = store.CreateAccount(acc)
	if err != nil {
		log.Fatal(err)
	}

	return acc
}

func seedAccounts(s Storage) {
	seedAccount(s, "anthony", "GG", "123123")

}

func main() {
	seed := flag.Bool("seed", false, "seed the db")
	flag.Parse()
	store, err := NewPostgresStore()
	if err != nil {
		log.Fatal(err)
	}
	if err := store.Init(); err != nil {
		log.Fatal(err)
	}
	if *seed {
		fmt.Println("seeding the DB")
		seedAccounts(store)
	}

	server := NewAPIServer(":3001", store)
	server.Run()
}
