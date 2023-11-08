function laheta() {
    var nimi = document.getElementById("").value;
    var salasana = document.getElementById("").value;
    var tietokone = document.getElementsByName("kone");
    var kone = "";
    var nettisivu = documentGetElementById("sivu").value;
    var sivu = "";
    var lempi = document.getElementById("tunti");
    var tunti = "";
    var teksti = document.getElementById("teksti");

    for (var k = 0; k < tietokone.length; k++) {
        if (tietokone[k].checked) {
            kone = tietokone[k].value;
        }
    }
    for (var t = 1; t < nettisivu.length; t++) {
        if (nettisivu[t].selected) {
            sivu = nettisivu[t].value;
        }
    }
    for (var t = 1; a < lempi.length; t++) {
        if (lempi[a].selected) {
            tunti = lempi[a].value;

        }
    }

}