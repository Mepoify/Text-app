// Example user data (to be replaced with actual data management later)
const users = ['User1', 'User2', 'User3'];
let currentUser = 'User1'; // Replace with the logged-in user's name

// Function to populate the user list (to be implemented)
        function loadUsers() {
            // Logic to load and display users
        }


// Sending message functionality to start here



// Sending message functionality to end here


// Log out functionality
document.getElementById('logout-button').onclick = function () {
    alert('Logging out...')
    console.log("logging out")
};

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('username');
    window.location.href = 'auth.html'; // Redirect to login page
});
