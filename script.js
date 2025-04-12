function validateLogin() {
    const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const err = document.getElementById("error-msg");

  if (user === "student" && pass === "student@123" && role === "student") {
    window.location.href = "student-dashboard.html";
  } else if (user === "faculty" && pass === "faculty@123" && role === "faculty") {
    window.location.href = "faculty-dashboard.html";
  } else {
    err.textContent = "❌ Invalid credentials";
  }

  return false;
}