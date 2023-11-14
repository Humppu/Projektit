function laheta() {
	let name = document.getElementById("nimisyotto").value;
	let age = document.getElementById("ikasyotot").value;	
	let drop = document.getElementById("drop").value;
	laji = document.querySelector('input[name="laji"]:checked');
	miksi = document.querySelector('input[name="miksi"]:checked');
	let teksti = document.getElementById("teksti").value;
	let mail = document.getElementById("emailsyotto").value; 

	if (name.length < 3) {
		alert("Kohta ei voi olla tyhj�! Nimess� pit�� olla v�hint��n 3 kirjainta!.");
	}	
	else if(!age.match(/^\d+/)) { 
		alert("Sy�t� ik�si");
	}
	else if(age < 18 || age > 100){
		alert("I�n pit�� olla 18 ja 100 v�lilt�");
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
		alert("Kommentoi jotain");
	}
	else {
		alert("Kiitos kun osallistuit kyselyyn");
	}



	function emailIsValid (emailsyotto) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailsyotto)
	}
	console.log(emailIsValid(emailsyotto))

	if (emailIsValid(mail)) {
		mail ==/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
	else
	{ 
		alert("Anna oikea s�hk�postiosoitteesi"); 
		return (false);
	}
}

