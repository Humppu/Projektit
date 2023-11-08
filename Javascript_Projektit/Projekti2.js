function laheta() {
	let nimi = document.getElementById("nimi").value;
	let salasana = document.getElementById("salasana").value;
	tietokone = document.querySelector('input[name="tietokone"]:checked');
	nettisivu = document.querySelector('input[name="nettisivu"]:checked');
	let teksti = document.getElementById("teksti").value;
	let tunti = document.getElementById("tunti").value;

	if (nimi == "") {
		alert("Anna nimi");
	}
	else if (salasana == "") {
		alert("Anna salasana");
	}
	else if (!tietokone) {
		alert("Valitse, millainen tietokoneen käyttäjä olet");
	}
	else if (!nettisivu) {
		alert("Valitse, miten opit");
	}
	else if (tunti == "") {
		alert("Valitse lempiaineesi");
	}
		else if (teksti.length == 0) {
		alert("Kirjoita");
	}
	else {
		alert("Kiitos vastauksestasi");
	}
}