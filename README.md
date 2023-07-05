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

# Future Microservice Architecture

## Authentication Service
- Responsible for user authentication and authorization.
- Utilizes JWT for token-based authentication.
- Tools/Technologies: Express.js, JWT, bcrypt.

## User Service
- Handles user-related operations such as user registration, profile management, and user search.
- Manages user data in the database.
- Tools/Technologies: Express.js, MongoDB.

## Post Service
- Manages blog posts and related operations such as creating, updating, and deleting posts.
- Handles post promotion, upvoting, and comment functionality.
- Communicates with other services via gRPC and Apache Kafka.
- Tools/Technologies: Express.js, MongoDB, gRPC, Apache Kafka.

## Payment Service
- Handles cryptocurrency payment processing for post promotion and donations.
- Integrates with a cryptocurrency payment gateway (e.g., Web3.js, Tronweb).
- Communicates with the Post Service to update post promotion status and user balances.
- Tools/Technologies: Express.js, Web3.js/Tronweb, MongoDB.

## NFT Service
- Manages NFTs and their associated tasks.
- Allows users to create and manage NFTs with bounties.
- Communicates with the Payment Service for handling crypto bounties.
- Tools/Technologies: Express.js, MongoDB.

## Search Service
- Provides advanced search and indexing capabilities using Elasticsearch.
- Enables users to search for posts, comments, or users based on specific criteria.
- Tools/Technologies: Elasticsearch, Express.js, MongoDB.

## Frontend Service
- Handles the presentation layer, user interface, and user interactions.
- Implements UI components and screens using React and Redux.
- Communicates with the backend services via RESTful APIs or gRPC.
- Tools/Technologies: React, Redux, Axios.

## Monitoring and Alerting
- Integrates Prometheus for collecting metrics and Grafana for data visualization and monitoring.
- Implements logging and distributed tracing with tools like Jaeger.
- Sets up alerting mechanisms to notify about critical system events.
- Tools/Technologies: Prometheus, Grafana, Jaeger.

## Deployment and Infrastructure
- Uses Docker for containerization of microservices.
- Utilizes Kubernetes for orchestrating and managing the deployment of microservices.
- Implements CI/CD pipelines using tools like Jenkins.
- Tools/Technologies: Docker, Kubernetes, Jenkins.

## Additional Tools and Utilities
- Utilize Redis for caching to improve performance.
- Implement GraphQL for efficient data fetching and API query flexibility.
- Consider using Debezium for change data capture to optimize database operations.
- Incorporate WebSockets for real-time communication, such as a global chat feature.
- Tools/Technologies: Redis, GraphQL, Debezium, WebSocket.


