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

function validateForm(numb) {

    var z = document.forms["lomake"]["numb"].value;

    if (!/^[0-9]+$/.test(z)) {
        alert("Syötä ikä numeroilla!")
    }

}

function validateform(name) {
    var name = document.getElementById.value;
   
    if (name == null || name == "") {
        alert("Kohta ei voi olla tyhjä!");
        return false;
    } else if (name.length < 3) {
        alert("Nisessä pitää olla vähintään 3 kirjainta!.");
        return false;
    }
}  