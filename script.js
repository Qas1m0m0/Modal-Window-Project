'use strict';

const modal = document.querySelector('.modal') ;
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function when button is clicked: the modal class is targeted and then we remove the classlist 'hidden'-> this SHOWS the modal
// Same with the overlay: the overlay class is targeted and then we remove the classlist 'hidden' -> SHOWING THE OVERLAY [BOTH ON CLICK]
function clickButton() {
    console.log('Button Clicked!!')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Function when the Modal is clicked off (X): Target modal class and we then ADD the 'hidden' class so that the modal + OVERLAY are hidden after the X is clicked
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', clickButton)
}

// Add event handlers to the classes and functions we want carried out.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// // Adding a keyboard event: ESC to escape the modal;
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})