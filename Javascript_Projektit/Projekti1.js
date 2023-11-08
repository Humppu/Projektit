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
    if (nimi.length < 1) {
        alert("Anna nimesi, kiitos!")
    }
    else if (salasana.legth < 1) {
        alert("Anna salasana, kiitos!")
    }
    else if (kone.length < 1) {
        alert("Valitse millainen koneenkäyttäjä olet")
    }
    else if (sivu.length < 1) {
        alert("Kerro miten hyvin osaat tehdä nettisivuja")
    }
    else if (tunti.length < 1) {
        alert("Kerro lempituntisi koulussa, kiitos!")
    }
    else if (teksti.length < 1) {
        alert("Kerro lyhyesti miten parantaisit opiskeluja, kiitos!")
    }
}