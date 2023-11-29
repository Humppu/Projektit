const cards = document.querySelectorAll('.memory-card, .memory-card2');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    let time = document.getElementById('time');
    let s = 0;
    //let m = 0;
    let klik = 1;


    let lasku = setInterval(function(){
      time.innerHTML = s++;
    }, 1000);

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
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
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
switch(document.getElementById('valikko').value)
{
case "2":
        window.location.replace("./4x4.html");
break;

case "3":
        window.location.replace("./4x6.html");
break;

case "4":
        window.location.replace("./6x6.html");
break;
  }
}