/*
Select HTML elements
*/
//Form
const formElem = document.getElementById("contactForm");
//First name
const firstNameElem = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");
//Last name
const lastNameElem = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");
//E-mail
const emailElem = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailInvalid = document.getElementById("invalidEmailError");
//Message
const messageElem = document.getElementById("message");
const messageError = document.getElementById("messageError");

/*
Add a submit event-listener
*/

formElem.addEventListener("submit", function(event) {
    //stop reload
    event.preventDefault();

    const firstNameValue = firstNameElem.value;
    const lastNameValue = lastNameElem.value; 
    const emailValue = email.value; 
    const messageValue = messageElem.value; 

    if(validateNotEmpty(firstNameValue) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    
    if(validateNotEmpty(lastNameValue) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    if(validateNotEmpty(emailValue) === true) {
        emailError.style.display = "none";
        if(validateEmail(emailValue) === true) {
            emailInvalid.style.display = "none";
        }
        else {
            emailInvalid.style.display = "block";
        }
    }
    else {
        emailError.style.display = "block";
    }

    if(validateMessage(messageValue) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }


 
})

/*
Validation functions
*/

//Function for input field not being empty
function validateNotEmpty(inputValue) {
    if(inputValue.trim().length > 0) {
        return true;
    }
    else {
        return false;
    }
}

//Function for email-validation
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}


//Function for message-validation
function validateMessage(message) {
    if(message.trim().length >= 10) {
        return true;
    }
    else {
        return false;
    }
}