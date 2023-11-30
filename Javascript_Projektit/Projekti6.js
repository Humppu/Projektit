function tallenna() {
	let etunimi = document.getElementById("nimi").value;
	let sukunimi = document.getElementById("snimi").value;
	let lähiosoite = document.getElementById("osoite").value;
	let postinumero = document.getElementById("pnumero").value;
	let postitoimipaikka = document.getElementById("ppaikka").value;
	let puhelin = document.getElementById("puhelin").value;
	let sahkoposti = document.getElementById("sposti").value;
	let ika = document.getElementById("ika").value

	console.log("sukunimi");

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

	else if (sähköposti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/){
		alert("Anna oikea sähköpostiosoitteesi");
		}

	else {
		alert("Kiitos, kun täytit lomakkeen!");

	}



	function emailIsValid(sposti) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sposti)
}
	console.log(emailIsValid(sposti))



	if (emailIsValid(sahkoposti)) {
	sahkoposti == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	}


	else {
		alert("Anna oikea sähköpostiosoitteesi");
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
		lähiosoite: osoite,
		postinumero: pnumero,
		postitoimipaikka: ppaikka,
		puhelinnumero: puhelin,
		ikä: ika,
		sähköposti: sposti, 
	}

	window.localStorage.setItem(nimi, JSON.stringify(tiedot));
}


function poista() {
	localStorage.clear()
}


