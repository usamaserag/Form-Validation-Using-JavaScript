/*vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvflexvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ""){
        //show error
        //add error class
        setErrorFor(username,"Username cannot be blank")
    } else {
        //add success class
        setSuccessFor(username)
    }

    if (emailValue === ""){
        setErrorFor(email,"Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email,"Email is not valid")
    }else {
        setSuccessFor(email)
    }

    if (passwordValue === ""){
        setErrorFor(password,"password cannot be blank")
    } else {
        setSuccessFor(password)
    }

    if (password2Value === ""){
        setErrorFor(password2,"password2 cannot be blank")
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2,"password does not match")
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector("small");

    //add error message inside small
    small.innerHTML = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add success class
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
};