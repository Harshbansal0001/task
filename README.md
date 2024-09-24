This is a Task Management API built with Node.js, Express, MongoDB, and JWT for user authentication. It allows users to create, read, update, and delete tasks. Authentication is required for performing operations, and we are using JWT stored in cookies for secure access.

Features
User Authentication: Login and register using JSON Web Tokens (JWT).
Task CRUD Operations: Users can create, read, update, and delete tasks.
Secure Access: Authentication is handled through JWT stored in HTTP-only cookies.
Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
JWT (JSON Web Tokens) for authentication
Cookies for storing tokens securely
Prerequisites
Make sure you have these installed:

Node.js (version 14 or higher)
MongoDB
Postman or curl for API testing
Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/Harshbansal0001/task
cd task-management-app
Install Dependencies:

bash
Copy code
npm install
Create a .env file: Create a .env file in the root of the project and add the following configuration:

makefile
Copy code
PORT=4000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret Key>
Start the Server:

bash
Copy code
npm start
By default, the server will run on http://localhost:4000.

API Endpoints
Authentication Routes
Register a User
Endpoint: POST /api/auth/register
Description: Registers a new user.
Request Body:
json
Copy code
{
  "username": "your_username",
  "email": "your_email",
  "password": "your_password"
}
Response: Returns a success message with the user details.
Login a User
Endpoint: POST /api/auth/login
Description: Logs in an existing user and stores the JWT in an HTTP-only cookie.
Request Body:
json
Copy code
{
  "email": "your_email",
  "password": "your_password"
}
Response: Returns a success message and sets the JWT token in a cookie.
Task Routes
Create a Task
Endpoint: POST /api/tasks
Description: Creates a new task (Requires authentication).
Headers:

Copy code
{
  "title": "Task Title",
  "description": "Task Description"
}
Response: Returns the created task.
Get All Tasks
Endpoint: GET /api/tasks
Description: Fetch all tasks for the authenticated user (Requires authentication).
Headers:
text
Copy code
Cookie: jwt=your_token
Response: Returns an array of tasks.
Get a Single Task
Endpoint: GET /api/tasks/:id
Description: Fetch a specific task by ID (Requires authentication).
Headers:
text
Copy code
Cookie: jwt=your_token
Response: Returns the task details.
Update a Task
Endpoint: PUT /api/tasks/:id
Description: Update an existing task (Requires authentication).
Headers:
text
Copy code
Cookie: jwt=your_token
Request Body (You can update one or both fields):
json
Copy code
{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
Response: Returns the updated task.
Delete a Task
Endpoint: DELETE /api/tasks/:id
Description: Delete a task by ID (Requires authentication).
Headers:
text
Copy code
Cookie: jwt=your_token
Response: Returns a success message.
Logout Route
Logout the User
Endpoint: POST /api/auth/logout
Description: Logs out the user by clearing the JWT cookie.
Response: Returns a success message.
Testing in Postman
Register a new user:

Send a POST request to http://localhost:4000/api/v1/signup.
In the body, send the user details as shown in the Register a User section.
Login a user:

Send a POST request to http://localhost:5000/api/v1/login.
In the body, provide the email and password of the registered user.
A JWT token will be stored in a cookie, and you’ll use this for authenticated routes.
Access the Task Routes:

After logging in, your JWT will be stored as a cookie.
Use the Cookie header in Postman for all task-related routes (GET, POST, PUT, DELETE) as shown in the task routes.