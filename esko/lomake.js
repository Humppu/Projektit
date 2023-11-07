function laheta() {
    var etunimi = document.getElementById('enimi').value;
    var sukunimi = document.getElementById('snimi').value;
    var koulu = document.getElementsByName('kouluun');
    var pvalikko = document.getElementById('lempi');
    var valittu = pvalikko.options[pvalikko.selectedIndex].value;
    var kouluun = "";
    for (var i = 0; i < koulu.length; i++) {
        if (koulu[i].checked) {
            kouluun = koulu[i].value;
        }
    }
    if (etunimi == "") {
        alert("Anna etunimesi");
    }
    else if (sukunimi == "") {
        alert("Anna sukunimesi");
    }
    else if (!kouluun) {
        alert("Kerro millä tulit kouluun");
    }
    else if (valittu == "") {
        alert("Valitse lempituntisi");
    }
    else {
        alert("Kiitos vastauksestasi");
    }

}