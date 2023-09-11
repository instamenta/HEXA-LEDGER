package main

import (
	"crypto-exchang/client"
	"crypto-exchang/server"
	"time"
)

func main() {
	go server.StartServer()

	time.Sleep(1 * time.Second)
	c := client.NewClient()

	bidParams := &client.PlaceLimitOrderParams{
		UserID: 8,
		Bid:    true,
		Price:  10_000,
		Size:   10,
	}

	go func() {
		for {
			if err := c.PlaceLimitOrder(bidParams); err != nil {
				panic(err)
			}
			time.Sleep(1 * time.Second)
		}
	}()

	askParams := &client.PlaceLimitOrderParams{
		UserID: 8,
		Bid:    false,
		Price:  8_000,
		Size:   1000,
	}

	go func() {
		for {
			if err := c.PlaceLimitOrder(askParams); err != nil {
				panic(err)
			}
			time.Sleep(1 * time.Second)
		}
	}()

	select {}
}
