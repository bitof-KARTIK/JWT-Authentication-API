# JWT Authentication API

This project is a simple API that uses JSON Web Tokens (JWT) for authentication. It is built using Node.js and Express, and uses MongoDB as its database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    gh repo clone bitof-KARTIK/JWT-Authentication-API
    ```
2. Navigate to the project directory:
    ```sh
    cd AUTHAPP
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root of the project and add your environment variables:
    ```env
    JWT_SECRET=<your-jwt-secret>
    MONGODB_URI=<your-mongodb-uri>
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication Routes

- **Register User**
    ```http
    POST /api/auth/register
    ```
    - Request Body:
        ```json
        {
            "name": "User Name",
            "email": "user@example.com",
            "password": "password"
        }
        ```

- **Login User**
    ```http
    POST /api/auth/login
    ```
    - Request Body:
        ```json
        {
            "email": "user@example.com",
            "password": "password"
        }
        ```

- **Logout User**
    ```http
    GET /api/auth/logout
    ```

- **Get User Profile**
    ```http
    GET /api/auth/profile
    ```
    - This route is protected and requires a valid JWT token.

## Project Structure

- `app.js`: Main entry point of the application.
- `config/mongoose-connection.js`: MongoDB connection configuration.
- `controllers/authController.js`: Authentication controllers.
- `middlewares/protect.js`: Middleware to protect routes.
- `models/user-model.js`: User model schema.
- `routes/authRoutes.js`: Authentication routes.

## License

This project is licensed under the MIT License.
