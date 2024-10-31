function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const correctPassword = 'ordem'; // Troque pela sua senha

    const message = document.getElementById('message');
    const protectedContent = document.getElementById('protected-content');

    if (passwordInput === correctPassword) {
        protectedContent.style.display = 'block';
        message.textContent = '';
    } else {
        message.textContent = 'Senha incorreta. Tente novamente.';
        protectedContent.style.display = 'none';
    }
}



