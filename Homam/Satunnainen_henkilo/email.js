
 function emailIsValid(emailsyotto) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailsyotto)
}
console.log(emailIsValid(emailsyotto))

if (emailIsValid(mail)) {
	mail == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
else {
	alert("Anna oikea s�hk�postiosoitteesi");
	lomake.mail.focus();
	return (false);
}
}
