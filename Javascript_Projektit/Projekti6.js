function tallenna() {
	let etunimi = document.getElementById("nimi").value;
	let sukunimi = document.getElementById("snimi").value;
	let l�hiosoite = document.getElementById("osoite").value;
	let postinumero = document.getElementById("pnumero").value;
	let postitoimipaikka = document.getElementById("ppaikka").value;
	let puhelin = document.getElementById("puhelin").value;
	let sahkoposti = document.getElementById("sposti").value;
	let ika = document.getElementById("ika").value

	console.log("sukunimi");

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

	else if (s�hk�posti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/){
		alert("Anna oikea s�hk�postiosoitteesi");
		}

	else {
		alert("Kiitos, kun t�ytit lomakkeen!");

	}



	function emailIsValid(sposti) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sposti)
}
	console.log(emailIsValid(sposti))



	if (emailIsValid(sahkoposti)) {
	sahkoposti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


	else {
		alert("Anna oikea s�hk�postiosoitteesi");
	return (false);

	}


}


function tallenna() {
	var nimi = document.getElementById("nimi").value;
	var snimi = document.getElementById("snimi").value;
	var osoite = document.getElementById("osoite").value;
	var pnumero = document.getElementById("pnumero").value;
	var ppaikka = document.getElementById("ppaikka").value;
	var puhelin = document.getElementById("puhelin").value;
	var ika = document.getElementById("ika").value;
	var sposti = document.getElementById("sposti").value;

	const tiedot = {
		etunimi: nimi,
		sukunimi: snimi,
		l�hiosoite: osoite,
		postinumero: pnumero,
		postitoimipaikka: ppaikka,
		puhelinnumero: puhelin,
		ik�: ika,
		s�hk�posti: sposti, 
	}

	window.localStorage.setItem(nimi, JSON.stringify(tiedot));
}


function poista() {
	localStorage.clear()
}


