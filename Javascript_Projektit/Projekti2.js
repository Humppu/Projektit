
        let y = Math.floor(Math.random() * 10 + 1);
        let guess = 1;
        let voitot = 0;
        let tappiot = 0;

        document.getElementById("t1").innerHTML = voitot;
        document.getElementById("t2").innerHTML = tappiot;

        function kokeile() {
            let x = document.getElementById("guessField").value;

                if (x == y) {
                    alert("Onneksi olkoon!!! Arvasit oikein "
                        + guess + " GUESS ");
                        voitot++;
                        document.getElementById("t1").innerHTML = voitot;

                }

                else if (x > y) {
                    
                    if (guess == 4){
                        alert("GAME OVER")
                        tappiot++;
                        document.getElementById("t2").innerHTML = tappiot;
                    }
                    else{
                        alert("OOPS SORRY!! Kokeile pienemp‰‰ numeroa");
                    }
                    guess++;
                }
                else if (x < y){
                    
                    if (guess == 4){
                        alert("GAME OVER")
                        tappiot++;
                        document.getElementById("t2").innerHTML = tappiot;
                    }
                    else{
                        alert("OOPS SORRY!! Kokeile isompaa numeroa")
                    }
                    guess++;
    }
    

}

function reset() {
              guess = 1;
              document.getElementById("guessField").value = '';
            }





