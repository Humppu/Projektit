function laheta(email) {
    var email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (emailIsValid(email)) { 
    }
    else {
        alert("Anna oikea s�hk�postiosoitteesi");
        lomake.email.focus();
        return (false);
    }

}

function laheta(numb) {

    var z = document.label["lomake"]["numb"].value;

    if (!/^[0-9]+$/.test(z)) {
        alert("Sy�t� ik� numeroilla!")
    }

}

function laheta(name) {
    var name = document.getElementById.value;
   
    if (name == null || name == "") {
        alert("Kohta ei voi olla tyhj�!");
        return false;
    } else if (name.length < 3) {
        alert("Nisess� pit�� olla v�hint��n 3 kirjainta!.");
        return false;
    }
}  