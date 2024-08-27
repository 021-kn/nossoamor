const startDate = new Date("2024-03-06 13:00:00"); // Substitua pela data e hora de início do namoro

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

setInterval(updateClock, 1000);
