const API_URL = "/api/students";

// Load students when page opens
window.onload = function () {
  loadStudents();
};

// ADD STUDENT
function addStudent() {
  // extra safety (in case button is inside form)
  if (event) event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !email || !course) {
    alert("Please fill all fields");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, course })
  })
    .then(res => {
      if (!res.ok) throw new Error("Failed to add student");
      return res.json();
    })
    .then(() => {
      clearForm();
      loadStudents();
    })
    .catch(err => {
      console.error(err);
      alert("Error adding student");
    });
}

// LOAD STUDENTS
function loadStudents() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("studentList");
      list.innerHTML = "";

      if (data.length === 0) {
        list.innerHTML = "<li>No students found</li>";
        return;
      }

      data.forEach(s => {
        list.innerHTML += `
          <li>
            <b>${s.name}</b> (${s.course})
            <button onclick="deleteStudent(${s.id})">❌</button>
          </li>
        `;
      });
    })
    .catch(err => {
      console.error(err);
      alert("Error loading students");
    });
}

// DELETE STUDENT
function deleteStudent(id) {
  if (!confirm("Delete this student?")) return;

  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => loadStudents())
    .catch(err => {
      console.error(err);
      alert("Error deleting student");
    });
}

// CLEAR FORM
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";
}
