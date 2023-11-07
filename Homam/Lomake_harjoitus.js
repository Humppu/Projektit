function laheta() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    var matka = document.getElementsByName("kuljin");
    var kuljin = "";
    var lempi = document.getElementById("tunti");
    var tunti = "";
    var tiedot = document.getElementById("tiedot");

    for (var k = 0; k < matka.length; k++) {
        if (matka[k].checked) {
            kuljin = matka[k].value;
        }
    }

    for (var t = 1; t < lempi.length; t++) {
        if (lempi[t].selected) {
            tunti = lempi[t].value;
        }
    }

    if (etunimi.length < 1) {
        alert("Täytä kohta etunimi, kiitos!")
    }

    else if (sukunimi.length < 1) {
        alert("Täytä kohta sukunimi, kiitos!")
    }

    else if (kuljin.length < 1) {
        alert("Valitse millä tulit kouluun, kiitos!")
    }


    else if (tunti.length < 1) {
        alert("Valitse lempi tuntisi, kiitos!")
    }

    else {
        alert("Tietosi on lähetetty!");
        document.getElementById("tiedot").innerHTML = "Hei " + etunimi + " " + sukunimi + ", tulit kouluun tänään " + kuljin + " ja lempiaineesi koulussa on " + tunti + ".";
        
    }

}