package userController

import (
	"context"
	"handler/global"
	"handler/middleware"
	"handler/utils"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Id       primitive.ObjectID `json:"_id" bson:"_id"`
	Username string             `json:"username" bson:"username"`
	Password string             `json:"password" bson:"password"`
	Email    string             `json:"email" bson:"email"`
}

type LoginForm struct {
	Username string `json:"username" bson:"username" validate:"required,min=3,max=20"`
	Password string `json:"password" bson:"password" validate:"required,min=5"`
}

type RegisterForm struct {
	Username string `json:"username" bson:"username" validate:"required,min=3,max=20"`
	Password string `json:"password" bson:"password" validate:"required,min=5"`
	Email    string `json:"email" bson:"email" validate:"required,email"`
}

func RegisterHandler(c *fiber.Ctx) error {
	var u RegisterForm
	if err := c.BodyParser(&u); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Invalid Input")
	}
	if err := global.XValidate.V.Struct(u); err != nil {
		return global.XValidate.HandleValidationErrors(c, err)
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError,
			"Failed to hash password")
	}
	user := bson.M{
		"username": u.Username,
		"email":    u.Email,
		"password": hashedPassword,
	}
	userData, err := global.DB.Collection("user").
		InsertOne(context.Background(), user)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"Error": "Registration Failed",
		})
	}
	userIdStr := userData.InsertedID.(primitive.ObjectID).Hex()
	token, err := utils.GenerateJWTToken(u.Username, u.Email, userIdStr)
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized,
			"Failed to create JWToken")
	}
	c.Cookie(&fiber.Cookie{
		Name:    "X-Auth",
		Value:   token,
		Expires: time.Now().Add(24 * time.Hour),
	})
	return c.JSON(fiber.Map{
		"_id":      userIdStr,
		"username": u.Username,
		"email":    u.Email,
		"message":  "Registration Success",
	})
}

func LoginHandler(c *fiber.Ctx) error {
	var u LoginForm
	if err := c.BodyParser(&u); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Invalid Input")
	}
	if err := global.XValidate.V.Struct(u); err != nil {
		return global.XValidate.HandleValidationErrors(c, err)
	}
	var dbUser User
	filter := bson.M{"username": u.Username}
	err := global.DB.Collection("user").FindOne(context.Background(), filter).Decode(&dbUser)
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized,
			"Invalid credentials Not Found")
	}
	err = bcrypt.CompareHashAndPassword(
		[]byte(dbUser.Password),
		[]byte(u.Password))
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized,
			"Invalid credentials")
	}
	token, err := utils.GenerateJWTToken(dbUser.Username, dbUser.Email, dbUser.Id.Hex())
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized,
			"Failed to create JWToken")
	}
	c.Cookie(&fiber.Cookie{
		Name:    "X-Auth",
		Value:   token,
		Expires: time.Now().Add(24 * time.Hour),
	})
	return c.JSON(fiber.Map{
		"id":       dbUser.Id.Hex(),
		"username": u.Username,
		"token":    token,
		"message":  "Login Success",
	})
}

func UpdateUserHandler(c *fiber.Ctx) error {
	var u RegisterForm
	locU := c.Locals("user").(*middleware.CustomClaims)
	if err := c.BodyParser(&u); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Invalid Input")
	}
	if err := global.XValidate.V.Struct(u); err != nil {
		return global.XValidate.HandleValidationErrors(c, err)
	}
	var dbUser User
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError,
			"Failed to hash password")
	}
	objectID, err := primitive.ObjectIDFromHex(locU.ID)
	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Invalid user ID")
	}
	filter := bson.M{"_id": objectID}
	update := bson.M{
		"$set": bson.M{
			"username": u.Username,
			"email":    u.Email,
			"password": hashedPassword,
		},
	}
	result, err := global.DB.Collection("user").UpdateOne(context.Background(), filter, update)
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized, "Invalid credentials: ", err.Error())
	}
	if result.ModifiedCount == 0 {
		return fiber.NewError(fiber.StatusUnauthorized, "Invalid credentials: No changes made")
	}
	err = global.DB.Collection("user").FindOne(context.Background(), filter).Decode(&dbUser)
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized, "Failed to retrieve updated user")
	}
	token, err := utils.GenerateJWTToken(dbUser.Username, dbUser.Email, locU.ID)
	if err != nil {
		return fiber.NewError(fiber.StatusUnauthorized,
			"Failed to create JWToken")
	}
	c.Cookie(&fiber.Cookie{
		Name:    "X-Auth",
		Value:   token,
		Expires: time.Now().Add(24 * time.Hour),
	})
	return c.JSON(fiber.Map{
		"username": u.Username,
		"token":    token,
		"message":  "Login Success",
	})
}
