async function validateLogin(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const role = document.getElementById("role").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const err = document.getElementById("error-msg");

  /*try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: user, password: pass, role: role })
    });

    const result = await response.json();

    if (result.success) {
      if (user === "student" && pass === "student@123" && role === "student") {
        window.location.href = "student-dashboard.html";
      } else if (user === "faculty" && pass === "faculty@123" && role === "faculty") {
        window.location.href = "faculty-dashboard.html";
      } else {
        // If credentials are valid, but don't match default users, still allow login
        if (role === "student") {
          window.location.href = "student-dashboard.html";
        } else if (role === "faculty") {
          window.location.href = "faculty-dashboard.html";
        }
      }
    } else {
      err.textContent = "❌ " + result.message;
    }
  } catch (error) {
    err.textContent = "❌ Server error. Try again.";
    console.error(error);
  }

  return false;
*/
if (user === "student" && pass === "student@123" && role === "student") {
    window.location.href = "dashboard.html";
  } else if (user === "faculty" && pass === "faculty@123" && role === "faculty") {
    window.location.href = "dashboard_teacher.html";
  } else {
    err.textContent = "❌ Invalid credentials";
  }
}
