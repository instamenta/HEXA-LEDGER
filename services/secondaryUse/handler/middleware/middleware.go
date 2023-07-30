package middleware

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

type CustomClaims struct {
	Username string `json:"username" bson:"username"`
	Email    string `json:"email" bson:"email"`
	ID       string `json:"id" bson:"_id"`
	jwt.RegisteredClaims
}

func IsGuest(c *fiber.Ctx) error {
	if c.Cookies("X-Auth") != "" {
		return fiber.ErrForbidden
	}
	return c.Next()
}

func IsAuth(c *fiber.Ctx) error {
	jwtToken := c.Cookies("X-Auth")
	if jwtToken == "" {
		return fiber.ErrUnauthorized
	}
	secret := os.Getenv("TOKEN_SECRET")
	token, err := jwt.ParseWithClaims(jwtToken, &CustomClaims{},
		func(token *jwt.Token) (interface{}, error) {
			return []byte(secret), nil
		},
	)
	if err != nil || !token.Valid {
		return fiber.ErrUnauthorized
	}
	claims, ok := token.Claims.(*CustomClaims)
	if !ok {
		return fiber.ErrUnauthorized
	}
	c.Locals("user", claims)
	return c.Next()
}
