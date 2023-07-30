package utils

import (
	"os"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateJWTToken(username, email, userId string) (string, error) {
	claims := jwt.MapClaims{
		"username": username,
		"email":    email,
		"id":       userId,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret := []byte(os.Getenv("TOKEN_SECRET"))
	tokenStr, err := token.SignedString(secret)
	if err != nil {
		return "", err
	}
	return tokenStr, nil
}
