async function validateLogin(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password, role })
    });

    const result = await response.json();

    if (result.success) {
      // Store user role in sessionStorage for future use
      sessionStorage.setItem('userRole', result.role);
      
      // Redirect based on role
      if (result.role === 'student') {
        window.location.href = "dashboard.html";
      } else if (result.role === 'faculty') {
        window.location.href = "faculty-dashboard.html";
      }
    } else {
      errorMsg.textContent = "❌ " + result.message;
    }
  } catch (error) {
    errorMsg.textContent = "❌ Server error. Please check if the server is running on port 3000";
    console.error('Login error:', error);
  }

  return false;
}