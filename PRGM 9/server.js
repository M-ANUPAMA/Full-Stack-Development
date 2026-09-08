const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("StudentDB");
        const students = db.collection("students");

        // CREATE - Add a student
        app.post('/api/students', async (req, res) => {
            const result = await students.insertOne(req.body);
            res.json(result);
        });

        // READ - Get all students
        app.get('/api/students', async (req, res) => {
            const result = await students.find().toArray();
            res.json(result);
        });

        // UPDATE - Update a student
        app.put('/api/students/:id', async (req, res) => {
            const result = await students.updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: req.body }
            );

            res.json(result);
        });

        // DELETE - Delete a student
        app.delete('/api/students/:id', async (req, res) => {
            const result = await students.deleteOne({
                _id: new ObjectId(req.params.id)
            });

            res.json(result);
        });

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    } catch (error) {
        console.error(error);
    }
}

startServer();