document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000);

    const form = document.getElementById('confirmationForm');
    const confirmButtons = document.querySelectorAll('.confirm-btn');
    const statusInput = document.getElementById('status');

    confirmButtons.forEach(button => {
        button.addEventListener('click', () => {
            confirmButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            statusInput.value = button.dataset.status;
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!statusInput.value) {
            alert('Por favor, escolha confirmar ou não confirmar');
            return;
        }

        const formData = {
            nome: document.getElementById('name').value,
            email: document.getElementById('email').value,
            status: statusInput.value,
            data: new Date().toISOString()
        };

        let confirmations = JSON.parse(localStorage.getItem('eventConfirmations') || '[]');
        confirmations.push(formData);
        localStorage.setItem('eventConfirmations', JSON.stringify(confirmations));

        alert('Confirmação enviada com sucesso!');
        form.reset();
        confirmButtons.forEach(btn => btn.classList.remove('selected'));
    });
});