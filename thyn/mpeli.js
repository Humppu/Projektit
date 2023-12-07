const cards = document.querySelectorAll('.memory-card, .memory-card2');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let klik = 1;
    let timer = document.querySelector(".timer");
    let second = 0; 
    let minute = 0; 
    let hour = 0;
    let pairs = 0;
    let maxPairs = 0;
    let interval;

    //MUUTTUJA VALIKKO EI OO ALUKS MITÄÄN
    let valikko;

    if (timer) {
          interval = setInterval(function(){
          timer.innerHTML = (minute+": "+second+"");
          second++;
         if(second == 60){
            minute++;
            second=0;
         }
         if(minute == 60){
            hour++;
            minute = 0;
         }
        },1000);
    }




  function flipCard() {
   if (lockBoard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
    document.getElementById('clicks').innerHTML= klik;
    klik++; 
  }

  function checkForMatch() {
      console.log(pairs)
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    if (isMatch) { 
        disableCards();
        pairs++;
    }
    else { 
        unflipCards();
    }
    endOfGame();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  function unflipCards() {
     lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

     lockBoard = false;
    }, 1500);
  }

  (function mix(){
    cards.forEach(card => {
      let mixer = Math.floor(Math.random()*36);
      card.style.order = mixer; 
    });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));



function laheta() {
    // TÄSSÄ VALIKOLLE ANNETAAN ARVO 
valikko = document.getElementById('valikko').value;

// JA SWITCH CASESSA KÄYTETÄÄN SITÄ ARVOA
switch(valikko)
{
case "2":
window.location.replace("./4x4.html");
maxPairs = 8;
break;

case "3":
window.location.replace("./4x6.html");
maxPairs = 12;
break;

case "4":
window.location.replace("./6x6.html");
maxPairs = 18;
break;
  }
}

function endOfGame() {
    //LOPPUPELISSÄ TARKISTETAAN SE VALIKON ARVO JA SEN MUKAAN ANNETAAN MUUTTUJALLE MAXPAIRS JOKO 8, 12 TAI 18
    if(valikko == 2 || "2") {
        maxPairs = 8;
        console.log(maxPairs);
    }
    else if(valikko == "3" || 3) {
        maxPairs = 12;
        console.log(maxPairs);
    }
    else if(valikko == "4"|| 4) {
        maxPairs = 18;
        console.log(maxPairs);
    }
    if(pairs == maxPairs) {
        clearInterval(interval);
    }
}