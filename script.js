document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (you can replace this with your own logic)
    if (username === "varaprasad" && password === "prasad143") {
        window.location.href = "home.html"; // Redirect to the home page
    } 
    else if (username === "abcd" && password === "1234") {
        window.location.href = "home.html"; // Redirect to the home page
    }
    else if (username === "efg" && password === "567") {
        window.location.href = "home.html"; // Redirect to the home page
    }
    else {
      alert("Invalid username or password");
    }
  });