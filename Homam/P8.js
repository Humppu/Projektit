
function drag(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
}


function allowDrop(e) {
    e.preventDefault();
}


function drop(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData("text/plain");
    e.currentTarget.appendChild(document.getElementById(id));
}