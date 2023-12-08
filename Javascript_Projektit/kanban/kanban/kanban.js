/* T‰ll‰ funktiolla mahdollistetaan se, ett‰ laatikko voidaan raahata toiseen paikkaan*/
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // T‰ss‰ m‰‰ritell‰‰n, mik‰ data ja mihin se on menossa
}
/* Edellisen jatko, eli mahdollistaa sen, ett‰ voidaan tiputtaa laatikko oikean otsikon alle*/
function allowDrop(ev) {
    ev.preventDefault();
}
/* Laatikon tiputus */
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
