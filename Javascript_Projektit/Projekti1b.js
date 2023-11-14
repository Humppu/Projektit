function laheta() {
	let name = document.getElementById("nimisyotto").value;
	let age = document.getElementById("ikasyotot").value;	
	let drop = document.getElementById("drop").value;
	laji = document.querySelector('input[name="laji"]:checked');
	miksi = document.querySelector('input[name="miksi"]:checked');
	let teksti = document.getElementById("teksti").value;
	let mail = document.getElementById("emailsyotto").value; 

	if (name.length < 3) {
		alert("Kohta ei voi olla tyhjä! Nimessä pitää olla vähintään 3 kirjainta!.");
	}
	else if (age == !/^[0-9]+$/) {
		alert("Syötä ikäsi");
	}	
	else if (drop == "") {
		alert("Valitse, taso");
	}
	else if (!laji) {
		alert("Sinun on valittava laji");
	}
	else if (!miksi) {
		alert("Sinun on valittava. Minkä takia harrastat?");
	}
		else if (teksti.length == 0) {
		alert("Kirjoita");
	}
	else {
		alert("Kiitos vastauksestasi");
	}



	function emailIsValid (emailsyotto) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailsyotto)
	}
	console.log(emailIsValid(emailsyotto))

	if (emailIsValid(mail)) {
		mail ==/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
	else
	{ 
		alert("Anna oikea sähköpostiosoitteesi"); 
		return (false);
	}
}

