const ratingButtons = document.querySelectorAll('.ratingBtns button');
const submitButton = document.querySelector('.sbtBtn');

let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedRating = button.textContent;
        ratingButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.classList.remove('active');
        });
        button.classList.add('selected');
        button.classList.add('active'); 
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating > 0) {
        localStorage.setItem('selectedRating', selectedRating);
        window.location.href = 'thanku.html';
    } else {
        alert('Please select a rating before submitting.');
    }
});