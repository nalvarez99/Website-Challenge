// Selecting the input element and get its value 
var emailField = document.querySelector('.email-field');

function getInputValue() {
    var inputVal = emailField.value;
    var invalidText = document.getElementById("invalid-text");

    if (inputVal === '') {
        invalidText.innerHTML = "Oops! Please add your email";
        emailField.classList.toggle('email-field-invalid');
    } else {
        invalidText.innerHTML = "Oops! That doesn't look like an email address";
    }
}

function resetFocus() {
    emailField.className = 'email-field';
}

function setFocus() {
    emailField.focus();
}

document.getElementById("emailButton").addEventListener("click", getInputValue);

document.getElementById("emailButton").addEventListener("click", setFocus);

focus.addEventListener("click", resetFocus);