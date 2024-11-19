// Gera um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Referência ao formulário e ao elemento de resultado
const form = document.getElementById('guess-form');
const resultDiv = document.getElementById('result');

// Evento de envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtém o valor do palpite do usuário
    const userGuess = parseInt(document.getElementById('guess').value, 10);

    // Verifica o palpite
    if (userGuess === randomNumber) {
        resultDiv.textContent = "Parabéns! Você acertou o número!";
        resultDiv.style.color = "green";
    } else if (userGuess > randomNumber) {
        resultDiv.textContent = "O número é menor! Tente novamente.";
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = "O número é maior! Tente novamente.";
        resultDiv.style.color = "red";
    }
});
