function satHenk() {
    let pohja;
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {

            pohja = data.results[0];
            console.log(pohja);

            document.getElementById("henkilo").innerHTML =
                "<br/> <img src='" + pohja.picture.large + "' id='vasen'>" + "<p>Nimi:" + " " + pohja.name.title + " " + pohja.name.first + " " + pohja.name.last + "</p>"+
                "<p>Osoite:" + " " + pohja.location.street.name + " " + pohja.location.street.number + " " + pohja.location.city + " " + pohja.location.postcode +
            +"</p>" + "<br/> <p>Sähköposti: " + " " + pohja.email + "</p>" + " <p>Puhelin: " + " " + pohja.cell + " / " + pohja.phone + "</p>" +
            "<p> Maa: " + " " + pohja.location.country + "</p>" + "<p>Käyttäjätunnus: " + " " + pohja.login.username + "</p>" + "<p>Salasana: " + " " + pohja.login.password + "</p>"
        });
}