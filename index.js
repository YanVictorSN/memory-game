const cards = document.querySelectorAll('[data-card]');

//Função para tornar as cartas clicáveis.
cards.forEach(card => card.addEventListener('click', flipCard));

shuffle();

function flipCard() {
    this.classList.toggle('flipcard');
}

function shuffle() {
    cards.forEach(card => {
        let randomCards = Math.floor(Math.random() * 12);
        card.style.order = randomCards;
    })
 }