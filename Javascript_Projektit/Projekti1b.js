function emailIsValid(email) {
    var sahkoposti = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (emailIsValid(sahkoposti)) { 
    }
    else {
        alert("Anna oikea sähköpostiosoitteesi");
        lomake.email.focus();
        return (false);
    }

}

function validateForm() {

    var z = document.forms["lomake"]["numb"].value;

    if (!/^[0-9]+$/.test(z)) {
        alert("Syötä ikä numeroilla!")
    }

}


