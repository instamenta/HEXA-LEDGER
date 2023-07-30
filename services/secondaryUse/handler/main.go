package main

import (
	"context"
	"fmt"
	"handler/global"
	"handler/initializer"
	"handler/routes"
	"log"
	"os"
	"os/signal"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
	"go.mongodb.org/mongo-driver/mongo"
)

func main() {
	ctx, dbclient, app, cancel := initializer.LoadService()
	defer cancel()
	/** HADNLE SHUTTING DOWN */
	defer func(dbclient *mongo.Client, ctx context.Context) {
		err := dbclient.Disconnect(ctx)
		if err != nil {
			fmt.Println(err)
		}
	}(dbclient, ctx)
	defer func(APP *fiber.App) {
		err := APP.Shutdown()
		if err != nil {
			fmt.Println(err)
		}
	}(app)
	/** CREATES VALIDATOR AND ATTACH TO GLOBAL CONTEXT*/
	cv := global.NewCustomValidator()
	global.XValidate = cv

	/** ROUTES */
	routes.SetupRoutes(app)

	go func(APP *fiber.App) {
		if err := APP.Listen(":3020"); err != nil {
			log.Fatal(err)
		}
	}(app)
	/** BOILER TEMPLATE*/
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("Shutting down server...")
}
