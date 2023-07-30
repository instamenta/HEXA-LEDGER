package global

import (
	"context"
	"strings"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	DBClient   *mongo.Client
	XValidate  *CustomValidator
	CCtx       context.Context
	CCtxCancel context.CancelFunc
	DB         *mongo.Database
)

// CustomValidator Validation Logic Init
type CustomValidator struct {
	V *validator.Validate
}

func NewCustomValidator() *CustomValidator {
	return &CustomValidator{V: validator.New()}
}

func (xv *CustomValidator) HandleValidationErrors(c *fiber.Ctx, err error) error {
	if err != nil {
		var errors []string
		for _, err := range err.(validator.ValidationErrors) {
			errors = append(errors, "The "+err.Field()+" field is invalid: Provided Error: "+err.Error())
		}
		return fiber.NewError(fiber.StatusBadRequest, strings.Join(errors, ", "))
	}
	return nil
}
