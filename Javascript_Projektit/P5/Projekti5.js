
var merkit = ["kuva0,jng", "kuva1.jng", "kuva2.jpg", "kuva3.jpg", "kuva4.jpg", "kuva5.jpg", "kuva6.jpg", "kuva7.jpg", "kuva8.jpg"]
var smerkki = 0; 
var vanha = -1; 
var valtti; 
function ekaPeli() {

    sekoitetut = sekoita(merkit);

    var paikka = document.getElementById("peliPaikka");
    var taulukko = document.createElement("table");
    var taulukonSisus = document.createElement("tbody");


    for (var t = 0; t < 4; t++) {

        var rivi = document.createElement("tr");

        for (var k = 0; k < 4; k++) {

            var solu = document.createElement("td")
            var sisus = document.createTextNode("");

            solu.setAttribute("alt", sekoitetut, [(smerkki)]);
            solu.setAttribute("id", "solu" + smerkki);
            solu.setAttribute("name", smerkki);
            solu.setAttribute("onclick", "nayta(" + smerkki + ");");
            

            smerkki += 1;


            solu.appendChild(sisus);
            rivi.appendChild(solu);
        }

        taulukonSisus.appendChild(rivi); 
    }

    paikka.appendChild(taulukko);
    taulukko.setAttribute("border", "3");
}



function sekoita(taulukko) {
    taulukko.sort(function (a, b) { return 0.5 - Math.random() });
    return taulukko;
}



function nayta(numero) {
    var tunnus = document.getElementById("solu" + numero);
    var altti = tunnus.getAttribute("alt");

    if (vanha != -1) {
        valtti = vanha.getAttribute("alt");
    }
    else {
        valtti = vanha;
    }



    tunnus.innerHTML = '<img src="webkuvat/"' + altti + '"">';

    if (altti == valtti) {
        var altti = tunnus.getAttribute("alt");

        vanha.innerHTML = '<"' + altti + '"">';
        tunnus.innerHTML = '<img src"webkuvat/"' + altti + '"">';
    }
    

    else {
        vanha = tunnus;
        odota(tunnus)
    }




    function odota(uusi) {
        setTimeout(function () {
            uusi.innerHtml = "";

        }, 200);
    }
}
