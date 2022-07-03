const cards = document.querySelectorAll('.card');
let HasFlippedCard = false;
let FirstCard;
let SecondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === FirstCard) return;
    this.classList.add('flip');
    if(!HasFlippedCard){
        HasFlippedCard = true;
        FirstCard = this;
        return;
    }
    
    HasFlippedCard = false;
    SecondCard= this;
    checkForMach();
}

function checkForMach(){
    if(FirstCard.dataset.card === SecondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    FirstCard.removeEventListener('click', flipCard);
    SecondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() =>{
        FirstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');
        lockBoard = false;
    }, 1000);
}

( function suffle(){
    cards.forEach ((card) => {
        let Random = Math.floor(Math.random()* 12);
        card.style.order = Random;
    })
}) ();

cards.forEach((card) =>  {
    card.addEventListener('click', flipCard)
});