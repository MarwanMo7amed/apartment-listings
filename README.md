# Apartment Listing Application

This is a full-stack apartment listing application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to explore, view, and add apartment listings, as well as access detailed information developer, unit , location, pricing and more. The Frontend is integrated with the 2 APIs for lising and details the logic linking the developer to appartment is implemented on backend but the API for developer inquiry is availed to allow full Apartment creation with postman collection provided.

## Key Features

- **Browse Listings:** Users can view a list of available apartments with basic details.
- **Apartment Information:** Each listing contains detailed information such as images, descriptions, price, and more.
- **Create Listings:** Users can create and add new apartment listings to the system.
- **Pagination & Caching Support:** Apartments are displayed with pagination, making it easier to navigate through large datasets. each page is cached with invalidation policy on creation to reduce the load on the server.
- **API Integration:** The frontend communicates with a backend API to fetch, display the apartment listing.
- **Docker-Ready:** The entire application is containerized, making it easy to deploy and run.

## Technology Stack

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Backend APIs

You can view the API documentation through Swagger at: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

1. **GET /v1/developer:** Get a list of all developers.
2. **GET /v1/apartment:** Retrieve apartments with pagination support.
3. **GET /v1/apartment/:id:** Fetch details of a specific apartment by its ID.
4. **POST /v1/apartment:** Add a new apartment listing to the system.

## Postman Collection

A Postman collection is provided for testing and interacting with the backend APIs. Below is a summary of the available endpoints:

| Method | Endpoint               | Description                                 |
|--------|------------------------|---------------------------------------------|
| GET    | /v1/developer           | Retrieve a list of all developers           |
| GET    | /v1/apartment           | Fetch apartments with pagination            |
| GET    | /v1/apartment/:id       | Get details of a specific apartment         |
| POST   | /v1/apartment           | Add a new apartment listing                 |

You can import the provided Postman collection to easily test these APIs.

## Running with Docker

The application is containerized with Docker Compose for simplified deployment. To launch the application, use the following command:

```bash
docker compose up --build
