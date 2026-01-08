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
      return
