function laheta() {
	let name = document.getElementById("nimi").value;
	let age = document.getElementById("ika").value;	
	let drop = document.getElementById("drop").value;
	laji = document.querySelector('input[name="laji"]:checked');
	miksi = document.querySelector('input[name="miksi"]:checked');
	let teksti = document.getElementById("teksti").value;
	let mail = document.getElementById("email").value; 

	if (name.length < 3) {
		alert("Kohta ei voi olla tyhjä! Nimessä pitää olla vähintään 3 kirjainta!.");
	}	
	else if(!age.match(/^\d+/)) { 
		alert("Syötä ikäsi");
	}
	else if(age < 18 || age > 100){
		alert("Iän pitää olla 18 ja 100 väliltä");
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
		alert("Kommentoi jotain");
	}
	else {
		alert("Kiitos kun osallistuit kyselyyn");
	}



	function emailIsValid (email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}
	console.log(emailIsValid(email))

	if (emailIsValid(mail)) {
		mail ==/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
	else
	{ 
		alert("Anna oikea sähköpostiosoitteesi"); 
		return (false);
	}
}

