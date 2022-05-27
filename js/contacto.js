
let genderValue = male.checked ? "male" : "female"
function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

var fields = {};

document.addEventListener("DOMContentLoaded", function () {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
})


function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);

    return valid;
}

class User {
    constructor(firstName, lastName, gender, email, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.question = question;
    }
}

function sendContact() {
    fields.gender = getGender();

    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, fields.gender.value, email.value, question.value);
        alert(`${usr.firstName} gracias por contactarte con Clima Simple, en breve nos estaremos comunicando.`)
    } else {
        alert('Ocurrio un error')
    }

}


