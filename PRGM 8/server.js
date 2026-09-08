const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();

app.use(express.json());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("StudentDB");
        const students = db.collection("students");

        // INSERT
        app.post('/students', async (req, res) => {
            const result = await students.insertOne(req.body);
            res.json(result);
        });

        // UPDATE
        app.put('/students/:name', async (req, res) => {
            const result = await students.updateOne(
                { name: req.params.name },
                { $set: req.body }
            );

            res.json(result);
        });

        // DELETE
        app.delete('/students/:name', async (req, res) => {
            const result = await students.deleteOne({
                name: req.params.name
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