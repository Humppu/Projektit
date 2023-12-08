const item = document.querySelector(".cardTitle");

item.addEventListener("dragstart", dragStart);

function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.classList.add("hide");
    }, 0);
}


const boxes = document.querySelectorAll(".tehtava");

boxes.forEach(tehtava => {
    tehtava.addEventListener("dragenter", dragEnter)
    tehtava.addEventListener("dragover", dragOver);
    tehtava.addEventListener("dragleave", dragLeave);
    tehtava.addEventListener("drop", drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
}

function dragLeave(e) {
    e.target.classList.remove("drag-over");
}






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