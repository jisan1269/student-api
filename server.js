
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.json());

// Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed");
        console.log(error.message);
    });


// ===============================
// POST - Create a new student
// ===============================
app.post("/students", async (req, res) => {
    try {
        const { name, email, age, department } = req.body;

        if (!name || !email || !age || !department) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const student = new Student({
            name,
            email,
            age,
            department
        });

        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student created successfully",
            student: savedStudent
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create student",
            error: error.message
        });
    }
});


// ===============================
// GET - Get all students
// ===============================
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });
    }
});


// ===============================
// GET - Get student by ID
// ===============================
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(400).json({
            message: "Invalid student ID"
        });
    }
});
