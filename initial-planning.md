# Laravel for Admin Panel

# STACK	
##. POLYGLOT
	
1. Microservices 
 - gRPC, protobuf
 - Apache Kafka
2. Authentication
 - JWT
 - bCRYPT
3. Database Optimizations
 - Debezium
 - GraphQL
	  
##. JAVASCRIPT
	
1. Backend

 - Express.js
 - express-http-proxy 
 
2. Blockchain

 - Web3.js
 - Tronweb
	  
##. FRONTEND
	
1. P.H.P.

 - Laravel
 - Laravel Sanctum
 - Laravel Breeze || Jet
 - Pthreads
 - ReactPHP
 - Livewire ||&& Intertia
	  
2. JavaScript

 - React
 - Redux
 - Vite
 - React Springs

## Quality Standart Automation

1. Linting & etc.

 - Psalm
 - Codesniffer
	 
2. Testing

 - PHPUnit
 - JEST
 - CYPRESS

3. Standards

 - Linter & DocBlock
 - DRY & OOP
 - Create minimalistic Documentation
 - Writing Unit tests
 - Avoid over-fetching
 
## Databases

 - MongoDB
 - PostgrSQL
 - Redis ( Cache )
 - ElasticSearch
 
## Packages & etc.

### GO

 - franz-go
 - mongo-go-driver
 - github.com/jackc/pgx
 - go-ethereum

### PHP

 - predis/predis
 - laravel/slack-notification-channel

### JS, TS

 - Redpanda
 - Web3.js
 - go-tron
 
## Specifications

 - HTTP-3
 - QWIK
 - Nginx
 - SPA
 - Tailwind CSS
 
## Cloud ( Free )

 - Grafana Cloud ( metrics )
 - MongoDB Atlas

## Languages

 - JavaScript <Node.js> <TypeScript>
 - Go
 - PHP

## Architecture

 - Frontend
 - API Router
 - User Auth
 
## DevGitOps

 - Docker, Kubernetes, Helm
 - Jenkins
 - Istio 
 - Envoy + Nginx ( Proxies )
 - Voult by HoshiCorp
 * Loki, Terraform, Ansible, Kiali

## Monitoring, Scraping, Alerting & Data Visualization

 - Prometheus
 - Grafana
 - Jeager

## Webdesign and UI/UX
 - Pure CSS ( based on Frontend's team limitations) 
 
```
Webdesing with characteristics of retro 90's
vaporwave, Windows 95 aesthetic mixing flat grey colors
with colorful gradients and reversed box shadows.
```

## DevTools

 - Postman
 - Minikube
 
## Microservices 


### Prototype-1
```
hexagots-frontend [JavaScript]:

Responsible for the user interface (ReactJS, Redux, Vite, React Springs).
Communicates with other microservices to fetch data and perform actions.
hexagots-authentication [PHP]:

Handles user authentication and authorization (JWT, bCrypt).
Provides endpoints for user login, registration, and access control.
hexagots-post-management [PHP]:

Manages user posts and related functionalities.
Allows users to create, view, edit, and delete their posts.
Handles the history of trades related to posts.
hexagots-blockchain-integration [JavaScript]:

Integrates with different blockchain networks (Web3.js for Ethereum and Tronweb for Tron).
Provides endpoints for interacting with the blockchain for donations and promotions.
hexagots-trading-functionality [Go]:

Implements the crypto trading functionality.
Facilitates donating cryptocurrency to posts and giving crypto to promote posts.
hexagots-kafka [Go]:

Handles asynchronous communication between microservices using Apache Kafka.
Messages could be sent for various purposes like post updates, trade notifications, etc.
```

### Prototype-2

```
Frontend Microservice (Laravel + ReactJS):

This microservice will handle the user interfaces, views, and user interactions using Laravel for backend APIs and ReactJS for frontend development.
It will serve as the frontend application, rendering the user interface and managing user interactions.
Communication with the backend microservices will be done via gRPC for efficient and fast data transfer.
It will consume data from the other microservices (User Authentication Microservice and Crypto Trading Microservice) for displaying user-specific information, posts, and interactions.
User Authentication Microservice (Laravel):

This microservice will be dedicated to handling user authentication and authorization.
It will provide endpoints for user registration, login, logout, password reset, etc.
Communication with the Frontend Microservice and other microservices will be through gRPC, allowing it to authenticate users and provide the necessary security tokens.
Crypto Trading Microservice (Go + JavaScript):

This microservice will implement the crypto trading functionality, including donating cryptocurrency to posts and giving crypto to promote posts.
It will handle interactions with blockchain networks such as Ethereum (using web3.js), Tron (using tron.js), etc.
Communication with the Frontend Microservice and other microservices will be through gRPC or Kafka messages (as you specified earlier) for managing crypto transactions and trading history.
``

# Notes

```
enable.idempotence property must be set to true in your producer configuration

pay to promote

caching

global chat

migration from express.js to laravel
```
