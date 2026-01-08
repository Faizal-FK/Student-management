const API_URL = "/api/students";

// page load
window.onload = loadStudents;

function addStudent() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      course: document.getElementById("course").value
    })
  })
  .then(() => loadStudents());
}

function loadStudents() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("studentList");
      list.innerHTML = "";

      data.forEach(s => {
        list.innerHTML += `
          <li>
            ${s.name} (${s.course})
            <button onclick="deleteStudent(${s.id})">X</button>
          </li>`;
      });
    });
}

function deleteStudent(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  }).then(() => loadStudents());
}
