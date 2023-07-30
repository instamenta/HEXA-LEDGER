package routes

import (
	"fmt"
	user "handler/controller"
	mw "handler/middleware"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	API := app.Group("/api")
	VIEW := app.Group("/")

	API.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	API.Get("/user/:id", func(c *fiber.Ctx) error {
		result := c.Params("id")
		fmt.Println(result)
		return nil
	})
	API.Post("/user/:id", func(c *fiber.Ctx) error {
		rawId := c.Params("id")
		_, err := strconv.Atoi(rawId)
		if err != nil {
			return fiber.NewError(400, "Invalid Input")
		}
		return nil
	})

	API.Post("/login", mw.IsGuest, user.LoginHandler)
	API.Post("/register", mw.IsGuest, user.RegisterHandler)
	API.Post("/update", mw.IsAuth, user.UpdateUserHandler)

	VIEW.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Name": "my name",
		})
	})
}
