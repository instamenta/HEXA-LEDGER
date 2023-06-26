# HEXA-LEDGER Documentation

HEXA-LEDGER is a project that aims to provide a decentralized ledger system for managing user accounts and posts.

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [API Documentation](#api-documentation)
   - [User Routes](#user-routes)
   - [Post Routes](#post-routes)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

HEXA-LEDGER is a decentralized ledger system that utilizes gRPC, Apache Kafka, and other technologies to provide secure user account management and post creation functionalities. This documentation provides an overview of the project's architecture and documents the API routes and their functionalities.

## Architecture Overview

The HEXA-LEDGER project follows a microservices architecture, leveraging gRPC for inter-service communication and Apache Kafka for event streaming. Here is a high-level overview of the project's architecture:

![Architecture Diagram](architecture-diagram.png)

- **User Service**: Handles user-related operations, such as user registration, login, profile management, and follow/unfollow functionality.
- **Post Service**: Manages post-related operations, including creating, updating, and retrieving posts, as well as upvoting and downvoting posts.
- **Apache Kafka**: Acts as a distributed event streaming platform, facilitating communication and data synchronization between the microservices.
- **Database**: Stores user account information, post data, and other relevant information. MongoDB and PostgreSQL are used for database storage.

## API Documentation

This section documents the API routes and their functionalities for the HEXA-LEDGER project.

  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
