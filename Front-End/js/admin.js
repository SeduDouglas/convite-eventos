document.addEventListener('DOMContentLoaded', () => {
    const confirmationsList = document.getElementById('confirmationsList');
    const confirmations = JSON.parse(localStorage.getItem('eventConfirmations') || '[]');

    if (confirmations.length === 0) {
        confirmationsList.innerHTML = '<p>Nenhuma confirmação encontrada.</p>';
        return;
    }

    confirmations.forEach(conf => {
        const card = document.createElement('div');
        card.classList.add('confirmation-card');
        card.innerHTML = `
            <h3>${conf.nome}</h3>
            <p><strong>Email:</strong> ${conf.email}</p>
            <p><strong>Data:</strong> ${new Date(conf.data).toLocaleString()}</p>
            <span class="status ${conf.status}">${conf.status === 'confirmado' ? 'Confirmado' : 'Não Confirmado'}</span>
        `;
        confirmationsList.appendChild(card);
    });
});