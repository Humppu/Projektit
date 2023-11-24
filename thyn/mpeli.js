const cards = document.querySelectorAll('.memory-card, .memory-card2');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    let aika = document.getElementById('aika');
    let sekunnit = 0;
    let minuutit = 0;


    let lasku = setInterval(function () {
        aika.innerHTML = sekunnit++;
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