// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Send the login request to the backend server using AJAX, fetch API, or any other method
    // Implement the logic to validate the login credentials on the server and generate an authentication token or session
  
    // For demonstration purposes, simulate a successful login
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to the homepage or perform any other desired action upon successful login
      // window.location.href = 'homepage.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  // Attach an event listener to the login form
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
  