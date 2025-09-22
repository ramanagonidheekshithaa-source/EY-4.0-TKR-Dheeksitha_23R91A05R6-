// script.js
// Simple Calculator Logic

// Get elements from the DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

// Function to perform calculation
function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    // Check if inputs are valid
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultDiv.textContent = "Error: Division by zero!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result
    resultDiv.textContent = `Result: ${result}`;
}

// Attach event listener to button
calculateBtn.addEventListener("click", calculate);
