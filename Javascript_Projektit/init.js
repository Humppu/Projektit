function init() {
    $("#task1, #task2, #task3, #task4, #task5, #task6").bind("dragstart", function(event) {
        event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute("id"));
    });

    $("#todo, #inprogress, #test, #done").bind("dragover", function(event) {
        event.preventDefault();
    });

    $("#todo, #inprogress, #test, #done").bind("drop", function(event) {
        var notecard = event.originalEvent.dataTransfer.getData("text/plain");
        event.target.appendChild(document.getElementById(notecard));

        event.preventDefault();
    });
}
