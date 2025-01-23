const startDate = new Date("2024-08-01 00:00:00"); // Substitua pela data e hora de início do namoro
let timer;  // Variável para armazenar o setInterval

function updateClock() {
    const now = new Date();
    const timeDiff = now - startDate;

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.getElementById("clock").innerText = 
        `Estamos juntos há: ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

function pararContador() {
    clearInterval(timer);  // Para o contador
    document.getElementById("pararBtn").disabled = true;  // Desabilita o botão após parar
}

// Inicia o contador
timer = setInterval(updateClock, 1000);

// Adiciona o evento de parar ao botão
document.getElementById("pararBtn").addEventListener("click", pararContador);

