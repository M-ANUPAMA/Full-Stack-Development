const express = require('express');

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Anu', year: 3 },
    { id: 2, name: 'Bala', year: 2 },
    { id: 3, name: 'Chitra', year: 1 }
];

// GET - Display all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET - Display student using route parameter
app.get('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
});

// POST - Add a new student
app.post('/students', (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        year: req.body.year
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});