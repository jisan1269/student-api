# Student API

A simple RESTful Student API built with **Node.js, Express.js, and MongoDB**. This project was created as part of an API development assignment to practice creating API endpoints, connecting MongoDB, validating data, and testing APIs using Postman.

## 🚀 Features

* Connects to MongoDB using Mongoose
* Create a new student
* Get all students
* Get a student by ID
* Required field validation
* Handles invalid student IDs
* Handles student not found errors
* JSON-based API responses

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* dotenv

## 📁 Project Structure

```text
student-api/
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/jisan1269/student-api.git
```

### 2. Navigate to the project folder

```bash
cd student-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

> Do not upload your `.env` file or MongoDB credentials to GitHub.

### 5. Start the server

```bash
node server.js
```

The server will run at:

```text
http://localhost:3000
```

## 📌 API Endpoints

### 1. Create a Student

**POST**

```text
http://localhost:3000/students
```

#### Request Body

```json
{
  "name": "Jisan",
  "email": "jisan@gmail.com",
  "age": 22,
  "department": "CSE"
}
```

#### Response

```json
{
  "message": "Student created successfully",
  "student": {
    "name": "Jisan",
    "email": "jisan@gmail.com",
    "age": 22,
    "department": "CSE"
  }
}
```

---

### 2. Get All Students

**GET**

```text
http://localhost:3000/students
```

Returns a list of all students stored in the database.

---

### 3. Get Student by ID

**GET**

```text
http://localhost:3000/students/:id
```

Example:

```text
http://localhost:3000/students/6ac683cf7016afba0d59b6b1
```

Returns the student with the specified MongoDB ID.

## ❌ Error Handling

The API handles common errors such as:

### Missing Required Fields

```text
400 Bad Request
```

```json
{
  "message": "All fields are required"
}
```

### Invalid Student ID

```text
400 Bad Request
```

```json
{
  "message": "Invalid student ID"
}
```

### Student Not Found

```text
404 Not Found
```

```json
{
  "message": "Student not found"
}
```

## 🧪 API Testing

The API was tested using **Postman**.

Tested endpoints:

* `POST /students` — Create student
* `GET /students` — Get all students
* `GET /students/:id` — Get a specific student
* Invalid ID handling
* Student not found handling

## 🎯 Assignment Objective

The objective of this assignment was to build a basic Student REST API using **Express.js and MongoDB**, implement CRUD-related API operations, handle validation and errors, and test the API using Postman.

## 👨‍💻 Author

**Mahfujur Rahman Jisan**

GitHub:
https://github.com/jisan1269
