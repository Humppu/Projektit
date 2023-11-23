
 function emailIsValid(emailsyotto) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailsyotto)
}
console.log(emailIsValid(emailsyotto))

if (emailIsValid(mail)) {
	mail == /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}
else {
	alert("Anna oikea sähköpostiosoitteesi");
	lomake.mail.focus();
	return (false);
}
}
