const btnBack = document.getElementById('boton-lobby')
const result = document.getElementById('result')

btnBack.addEventListener('click', () => {
    window.location.href = "lobby.html"
})

let correctAnswers = (parseInt(localStorage.getItem("puntos")) / 5) * 100;

window.addEventListener('load', () => {
    result.textContent = correctAnswers + "%"

    if (correctAnswers < 50) {
        result.style.color = 'red'
    } else if (correctAnswers >= 50 && correctAnswers < 70) {
        result.style.color = 'yellow'
    }
})

