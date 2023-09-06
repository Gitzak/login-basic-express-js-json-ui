![alt text](https://github.com/Gitzak/login-basic-express-js-json-ui/blob/main/Screenshot%202023-09-06%20215857.png)
# **Express.js Authentication App**

This **Express.js authentication app** is a simple example of user registration, login, and protected routes using **JSON Web Tokens (JWT)** for authentication. It allows users to create accounts, log in, and access protected resources.

## **Features**

- **User Registration:** Users can create accounts with unique usernames and emails.
- **User Login:** Registered users can log in securely.
- **Protected Routes:** Certain routes are protected and can only be accessed by authenticated users.
- **Session Management:** User sessions are handled using Express.js sessions.
- **Password Hashing:** User passwords are securely hashed using bcrypt.
- **File Upload:** Users can upload avatars during registration (avatar handling is optional).

## **Technologies Used**

- **Express.js:** A popular web application framework for Node.js.
- **JSON Web Tokens (JWT):** Used for user authentication.
- **bcrypt:** For secure password hashing.
- **express-session:** For managing user sessions.
- **express-validator:** For input validation.
- **multer:** For handling file uploads.
- **EJS:** Templating engine for rendering views.

## **Prerequisites**

Before you run the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## **Installation**

### 1. Install the required npm packages:

```
npm install
```

### 2. Create a .env file in the project root and set the following environment variables:

```
SECRET_KEY=your_secret_key
```

### 3. Start the application:

```
nodemon app.js
```

## **Usage**
#### 1. Open your web browser and navigate to [http://localhost:3000/auth/register](http://localhost:3000/auth/register)
(or the port you specified in your .env file).

#### 2. Register a new account with a unique username and email.

#### 3. Log in using your registered email and password.

#### 4. Access protected routes (e.g., `/dashboard`) only when logged in.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve this project.

## License

This project is licensed under the MIT License.
