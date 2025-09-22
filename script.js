// script.js
// This file contains the JavaScript code for the button click alert

// Define a function to show an alert box
function showAlert() {
    alert("Button is clicked!");
}

// Get the button element by its ID
const button = document.getElementById("alertButton");

// Attach event listener to the button for 'click' event
button.addEventListener("click", showAlert);

// Alternative method (not recommended for multiple handlers):
// button.onclick = showAlert;
