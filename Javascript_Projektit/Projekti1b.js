function emailIsValid(email) {
    var sahkoposti = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (emailIsValid(sahkoposti)) { 
    }
    else {
        alert("Anna oikea s�hk�postiosoitteesi");
        lomake.email.focus();
        return (false);
    }

}

function validateForm() {

    var z = document.forms["lomake"]["numb"].value;

    if (!/^[0-9]+$/.test(z)) {
        alert("Sy�t� ik� numeroilla!")
    }

}


