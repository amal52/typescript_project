document.getElementById('signin-form')?.addEventListener('submit', async (event) => {
event.preventDefault();
const username = (document.getElementById('username') as HTMLInputElement).value;
const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
        const response = await fetch('http://localhost:3000/enseignant/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        const messageElement = document.getElementById('message');

        if (response.ok) {
            console.log('Connexion réussie:', data);

            // Stocker le token JWT dans le stockage local ou l'état
            localStorage.setItem('token', data.token);

            messageElement!.innerText = 'Connexion réussie !';
            messageElement!.style.color = 'green';

            // Rediriger ou faire autre chose après la connexion
        } else {
            messageElement!.innerText = data.message;
            messageElement!.style.color = 'red';
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
});
