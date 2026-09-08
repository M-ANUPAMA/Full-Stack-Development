const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const studentId = document.getElementById("studentId");
const submitButton = document.getElementById("submitButton");

// READ - Display all students
async function loadStudents() {
    const response = await fetch("/api/students");
    const students = await response.json();

    studentList.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.year}</td>
            <td>${student.department}</td>
            <td>
                <button class="edit-btn" onclick="editStudent('${student._id}', '${student.name}', ${student.year}, '${student.department}')">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteStudent('${student._id}')">
                    Delete
                </button>
            </td>
        `;

        studentList.appendChild(row);
    });
}

// CREATE and UPDATE
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        year: parseInt(document.getElementById("year").value),
        department: document.getElementById("department").value
    };

    if (studentId.value === "") {

        // CREATE
        await fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

    } else {

        // UPDATE
        await fetch(`/api/students/${studentId.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        studentId.value = "";
        submitButton.textContent = "Add Student";
    }

    form.reset();
    loadStudents();
});

// Edit student
function editStudent(id, name, year, department) {

    studentId.value = id;
    document.getElementById("name").value = name;
    document.getElementById("year").value = year;
    document.getElementById("department").value = department;

    submitButton.textContent = "Update Student";
}

// DELETE
async function deleteStudent(id) {

    await fetch(`/api/students/${id}`, {
        method: "DELETE"
    });

    loadStudents();
}

// Load students when page opens
loadStudents();