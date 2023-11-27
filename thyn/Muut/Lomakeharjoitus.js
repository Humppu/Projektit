function laheta() {
	let enimi = document.getElementById("enimi").value;
	let snimi = document.getElementById("snimi").value;
	kouluun = document.querySelector('input[name="kouluun"]:checked');
	let lempi = document.getElementById("lempi").value;

	if (enimi == "") {
		alert("Anna etunimesi");
	}
	else if (snimi == "") {
		alert("Anna sukunimesi");
	}
	else if (!kouluun) {
		alert("Kerro, millä tulit kouluun");
	}
	else if (lempi == "") {
		alert("Valitse lempiaineesi");
	}
	else {
		alert("Kiitos vastauksestasi");
	}
}