
const trailerButtons = document.querySelectorAll('.watch-trailer-btn');
const trailerModal = document.getElementById('trailerModal');
const closeModalBtn = document.getElementById('closeModal');
const trailerFrame = document.getElementById('trailerFrame');

for (let i = 0; i < trailerButtons.length; i++) {
    trailerButtons[i].addEventListener('click', function() {
        const trailerUrl = this.getAttribute('data-trailer');
        trailerFrame.src = trailerUrl;
        trailerModal.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden'; 
    });
}

closeModalBtn.addEventListener('click', function() {
    trailerModal.classList.add('opacity-0', 'pointer-events-none');
    trailerFrame.src = '';
    document.body.style.overflow = ''; 
});