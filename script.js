// DOM Objects
var emailField = document.querySelector('.email-field');
var emailButton = document.querySelector('.email-button');

// Function to check if inputs are just blank spaces
function checkForWhiteSpaces(args) {
    const trimmedString = args.trim().length;    
    return checkStringLength(trimmedString)        
}

function checkStringLength(args) {
    return args > 0 ? "not empty" : "empty string";
}

// Main email field input logic
function getInputValue() {
    var inputVal = emailField.value;
    var checkBlank = checkForWhiteSpaces(emailField.value);
    var invalidText = document.getElementById("invalid-text");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (checkBlank === "empty string") {
        invalidText.innerHTML = "Oops! Please add your email";
        if (!emailField.classList.contains('email-field-invalid')) {
            emailField.classList.toggle('email-field-invalid');
        }

    } else if (inputVal.match(mailformat)) {
        invalidText.innerHTML = "";
        if (emailField.classList.contains('email-field-invalid')) {
            emailField.classList.toggle('email-field-invalid');
        }

    } else {
        invalidText.innerHTML = "Oops! That doesn't look like an email address";
        if (!emailField.classList.contains('email-field-invalid')) {
            emailField.classList.toggle('email-field-invalid');
        }
    }
}

// Function to set and reset input field focus
function resetFocus() {
    emailField.className = 'email-field';
}

function setFocus() {
    emailField.focus();
}

// Event listeners
emailButton.addEventListener("click", getInputValue);

emailButton.addEventListener("click", setFocus);

emailField.addEventListener("click", resetFocus);