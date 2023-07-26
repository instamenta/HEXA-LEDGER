package main

import (
	"fmt"
	"net/http"

	"github.com/instamenta/rssag/internal/auth"
	"github.com/instamenta/rssag/internal/database"
)

type authHandler func(w http.ResponseWriter, r *http.Request, user database.User)

func (apiCfg *apiConfig) middlewareAuth(handler authHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		apiKey, err := auth.GetAPIKey(r.Header)
		if err != nil {
			respondWithError(w, 403, fmt.Sprintf("Auth error: %v", err))
			return
		}
		user, err := apiCfg.DB.GetUserByAPIKey(r.Context(), apiKey)
		if err != nil {
			respondWithError(w, 400, fmt.Sprintf("Counlnt get user: %v", err))
			return
		}
		handler(w, r, user)
	}
}
