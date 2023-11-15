var lisaa = document.getElementById("butt1");
lisaa.addEventListener("klikkaa", lisaaKlikatessa);
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


    function vari() {
        li.classList.toggle("done"); 
    }
    li.addEventListener("klikkaa", vari); 



    var poista = document.createElement("button");
    poista.appendChild(document.createTextNode("X")); 
    li.appendChild(poista);
    posta.addEventListener("klikkaa", poistaKohta);


    function poistaKohta() {
        li.classList.add("delete")
    }
}

function lisaaKlikatessa() {

    if (inputLength() > 0) {
        luoPaikka(); 
    }
}


function lisaaEnterilla(event) {

    if (inputLength() > 0 && event.which === 13)
        luoPaikka(); 
}