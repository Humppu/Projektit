
        let y = Math.floor(Math.random() * 10 + 1);
        let guess = 1;
 
function kokeile() {
            let x = document.getElementById("guessField").value;

                if (x == y) {
                    alert("Onneksi olkoon!!! Arvasit oikein "
                        + guess + " GUESS ");
                        butt.disabled = true;
                }

                else if (x > y) {
                    
                    if (guess == 4){
                        alert("GAME OVER")
                        butt.disabled = true;
                    }
                    else{
                        alert("OOPS SORRY!! Kokeile pienemp‰‰ numeroa");
                    }
                    guess++;
                }
                else if (x < y){
                    
                    if (guess == 4){
                        alert("GAME OVER")
                        butt.disabled = true;
                    }
                    else{
                        alert("OOPS SORRY!! Kokeile isompaa numeroa")
                    }
                    guess++;
                }
        }