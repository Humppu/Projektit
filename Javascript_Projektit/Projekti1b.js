function laheta() {
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;	
	let drop = document.getElementById("drop").value;
	laji = document.querySelector('input[name="laji"]:checked');
	miksi = document.querySelector('input[name="miksi"]:checked');
	let teksti = document.getElementById("teksti").value;


	if (name.length < 3) {
		alert("Kohta ei voi olla tyhj�! Nimess� pit�� olla v�hint��n 3 kirjainta!.");
	}
	else if (age == "") {
		alert("Sy�t� ik�si");
	}	
	else if (drop == "") {
		alert("Valitse, taso");
	}
	else if (!laji) {
		alert("Sinun on valittava laji");
	}
	else if (!miksi) {
		alert("Sinun on valittava. Mink� takia harrastat?");
	}
		else if (teksti.length == 0) {
		alert("Kirjoita");
	}
	else {
		alert("Kiitos vastauksestasi");
	}

	function emailIsValid (mail) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
	}
	console.log(emailIsValid(mail))

	if(!emailIsValid(mail)) { 
		alert("Anna oikea s�hk�postiosoitteesi"); 
	}
}

