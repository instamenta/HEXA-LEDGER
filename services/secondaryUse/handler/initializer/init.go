package initializer

import (
	"context"
	G "handler/global"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/gofiber/template/html/v2"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func LoadService() (context.Context, *mongo.Client, *fiber.App, context.CancelFunc) {
	/** INIT DOTENV */
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	G.CCtx, G.CCtxCancel = context.WithTimeout(context.Background(), 10*time.Second)
	/** INIT MONGO */
	mongodbUri := os.Getenv("MONGODB_URI")
	G.DBClient, err = mongo.Connect(G.CCtx, options.Client().ApplyURI(mongodbUri))
	if err != nil {
		log.Fatal(err)
	}
	G.DB = G.DBClient.Database("go-router")
	/** Init Fiber */
	htmlEngine := html.New("./views", ".gohtml")
	APP := fiber.New(fiber.Config{
		ServerHeader: "FiberHtmx",
		AppName:      "FIBERgoHTMX",
		Views:        htmlEngine,
	})
	APP.Static("/public", "./public")
	APP.Get("/metrics", monitor.New(monitor.Config{
		Title:   "MyService Metrics Page",
		Refresh: time.Second / 4,
	}))

	//collectionOptions := options.CreateCollection().SetValidator(bson.M{
	//	"username": bson.M{
	//		"$type": "string",
	//	},
	//}).SetValidationAction("error").SetValidationLevel("strict")
	//err = G.DB.CreateCollection(context.Background(), "user", collectionOptions)
	//if err != nil {
	//	log.Fatal(err)
	//}
	return G.CCtx, G.DBClient, APP, G.CCtxCancel
}
