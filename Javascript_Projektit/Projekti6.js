function tallenna() {
	let etunimi = document.getElementById("enimi").value;
	let sukunimi = document.getElementById("snimi").value;
	let l�hiosoite = document.getElementById("osoite").value;
	let postinumero = document.getElementById("pnumero").value;
	let postitoimipaikka = document.getElementById("ppaikka").value;
	let puhelin = document.getElementById("puhelin").value;
	let s�hk�posti = document.getElementById("sposti").value;
	let ika = document.getElementById("ika").value



	if (etunimi.length < 3) {
		alert("Sy�t� etunimesi, kiitos! (Kohdassa pit�� olla v�hint��n 3 merkki�");
	}

	else if (sukunimi.length < 3) {
		alert("Sy�t� sukunimesi, kiitos! (Kohdassa pit�� olla v�hint��n 3 merkki�");
	}


	else if (l�hiosoite.length < 3) {
		alert("Sy�t� kotiosoitteesi, kiitos!");
	}


	else if (!postinumero.match(/^\d+/)) {
		alert("Et t�ytt�nyt kohtaa postinumero oikein!")
	}


	else if (postitoimipaikka.length < 3) {
		alert("Sy�t� kotikuntasi, kiitos!!");
	}

	else if (!puhelin.match(/^\d+/)) {
		alert("Sy�t� puhelinnumerosi, kiitos!");
	}


	else if (!ika.match(/^\d+/)) {
		alert("Sy�t� ik�si, kiitos!");
	}


	else if (ika < 18 || ika > 100) {
		alert("I�n pit�� olla 18 ja 100 v�lilt�!");
	}


	else {
		alert("Kiitos, kun t�ytit lomakkeen!");
	}


	function emailIsValid(sposti) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sposti)
}
	console.log(emailIsValid(sposti))

	if (emailIsValid(sahkoposti)) {
	s�hk�posti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


	else {
	alert("Anna oikea s�hk�postiosoitteesi");
	lomake.sahkoposti.focus();
	return (false);

	}
}
