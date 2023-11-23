function tallenna() {
	let etunimi = document.getElementById("enimi").value;
	let sukunimi = document.getElementById("snimi").value;
	let lähiosoite = document.getElementById("osoite").value;
	let postinumero = document.getElementById("pnumero").value;
	let postitoimipaikka = document.getElementById("ppaikka").value;
	let puhelin = document.getElementById("puhelin").value;
	let sähköposti = document.getElementById("sposti").value;
	let ika = document.getElementById("ika").value



	if (etunimi.length < 3) {
		alert("Syötä etunimesi, kiitos! (Kohdassa pitää olla vähintään 3 merkkiä");
	}

	else if (sukunimi.length < 3) {
		alert("Syötä sukunimesi, kiitos! (Kohdassa pitää olla vähintään 3 merkkiä");
	}


	else if (lähiosoite.length < 3) {
		alert("Syötä kotiosoitteesi, kiitos!");
	}


	else if (!postinumero.match(/^\d+/)) {
		alert("Et täyttänyt kohtaa postinumero oikein!")
	}


	else if (postitoimipaikka.length < 3) {
		alert("Syötä kotikuntasi, kiitos!!");
	}

	else if (!puhelin.match(/^\d+/)) {
		alert("Syötä puhelinnumerosi, kiitos!");
	}


	else if (!ika.match(/^\d+/)) {
		alert("Syötä ikäsi, kiitos!");
	}


	else if (ika < 18 || ika > 100) {
		alert("Iän pitää olla 18 ja 100 väliltä!");
	}


	else {
		alert("Kiitos, kun täytit lomakkeen!");
	}


	function emailIsValid(sposti) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sposti)
}
	console.log(emailIsValid(sposti))

	if (emailIsValid(sahkoposti)) {
	sähköposti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


	else {
	alert("Anna oikea sähköpostiosoitteesi");
	lomake.sahkoposti.focus();
	return (false);

	}
}
