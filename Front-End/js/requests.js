async function getItems() {
    return await fetch('http://localhost:3000/convite', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

async function accept(data) {
    fetch('http://localhost:3000/convite/aceitar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Request accepted successfully');
        } else if (response.status === 400) {
            return response.json().then(data => {
                console.error('Validation error:', data.error);
            });
        }
    })
    .catch(error => console.error('Error:', error));
}

async function refuse(data) {
    fetch('http://localhost:3000/convite/recusar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Request rejected successfully');
        } else if (response.status === 400) {
            return response.json().then(data => {
                console.error('Validation error:', data.error);
            });
        }
    })
    .catch(error => console.error('Error:', error));
}


