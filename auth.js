// Handle form submission for both login and signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#signup-container input[type="text"]').value;
    const email = document.querySelector('#signup-container input[type="email"]').value;
    const password = document.querySelector('#signup-container input[type="password"]').value;

    // For now, let's mock a successful signup
    if (username && email && password) {
        alert(`Account created for ${username}!`);
        // On success, redirect to chat.html
        window.location.href = "chat.html";
    }
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameOrEmail = document.querySelector('#login-container input[type="text"]').value;
    const password = document.querySelector('#login-container input[type="password"]').value;

    // For now, let's mock a successful login
    if (usernameOrEmail && password) {
        alert(`Welcome back, ${usernameOrEmail}!`);
        // On success, redirect to chat.html
        window.location.href = "chat.html";
    }
});

// Optional: Handle account creation link (if you plan to implement this feature)
document.getElementById('create-account-link').onclick = function () {
    alert('Account creation feature coming soon!');
};