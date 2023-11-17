var lisaa = document.getElementById("butt1");
lisaa.addEventListener("click", lisaaNapauttaessa);
var teksti = document.getElementById("input");
teksti.addEventListener("keypress", lisaaEnterilla);
var ul = document.querySelector("ul");

function inputLength() {

    return input.value.length;
}


function luoPaikka() {
    var li = document.createElement("li");

    if (teksti.value != "") {
        li.appendChild(document.createTextNode(teksti.value));
        ul.appendChild(li);
        teksti.value = "";
    }


    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);


    var poisto = document.createElement("butt1");
    poisto.appendChild(document.createTextNode("X"));
    li.appendChild(poisto);
    poisto.addEventListener("click", poistaTehtava);


    function poistaTehtava() {
        li.classList.add("delete")
    }
}

function lisaaNapauttaessa() {

    if (inputLength() > 0) {
        luoPaikka();
    }
}


function lisaaEnterilla(event) {

    if (inputLength() > 0 && event.which === 13)
        luoPaikka();
}