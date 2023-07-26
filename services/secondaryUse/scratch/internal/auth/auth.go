package auth

import (
	"errors"
	"net/http"
)

func GetAPIKey(headers http.Header) (string, error) {
	val := headers.Get("Authorization")

	if val == "" {
		return "", errors.New("no auth token")

	}
	return val, nil
}
