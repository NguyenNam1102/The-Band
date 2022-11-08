var buyTickets = document.querySelectorAll('.place-btn');
var openModal = document.querySelector('.modal');
var removeModal = document.querySelector('.modal-close')

function showBuyTickets() {
    openModal.classList.add('open')
}

for(const buyTicket of buyTickets) {
    buyTicket.addEventListener('click', showBuyTickets)
}

function removeBuyTicket() {
    openModal.classList.remove('open')
}

removeModal.addEventListener('click', removeBuyTicket)