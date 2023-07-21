const btnFutbol = document.getElementById('boton-futbol')
const btnGeografia = document.getElementById('boton-geografia')
const btnCiencia = document.getElementById('boton-ciencia')
const btnJugar = document.getElementById('boton-jugar')
const h1 = document.querySelector('h1')

let answered = false
let selectedCategory = null;

btnFutbol.addEventListener('click', () => {
    resetColorButtons()
    btnFutbol.style.backgroundColor = 'rgb(55, 188, 48)'
    btnJugar.style.background = 'linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))'
    answered = true
    selectedCategory = 'futbol'
})

btnGeografia.addEventListener('click', () => {
    resetColorButtons()
    btnGeografia.style.backgroundColor = 'rgb(55, 188, 48)'
    btnJugar.style.background = 'linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))'
    answered = true
    selectedCategory = 'geografia'
})

btnCiencia.addEventListener('click', () => {
    resetColorButtons()
    btnCiencia.style.backgroundColor = 'rgb(55, 188, 48)'
    btnJugar.style.background = 'linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))'
    answered = true
    selectedCategory = 'ciencia'
})

function resetColorButtons() {
    btnFutbol.style.backgroundColor = ''
    btnGeografia.style.backgroundColor = ''
    btnCiencia.style.backgroundColor = ''
}

function verAnswer() {
    if (selectedCategory === 'futbol') {
        setTimeout(() => {
            window.location.href = 'categoria-futbol/first.html'
        }, 1500)
    }

    if (selectedCategory === 'geografia') {
        setTimeout(() => {
            window.location.href = 'categoria-geografia/first.html'
        }, 1500)
    }

    if (selectedCategory === 'ciencia') {
        setTimeout(() => {
            window.location.href = 'categoria-ciencia/first.html'
        }, 1500)
    }
}

btnJugar.addEventListener('click', () => {
    if (!answered) {
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = 'Elige una opción, por favor'
        div.appendChild(p)

        div.style.backgroundColor = 'red';
        div.style.maxWidth = '800px'
        div.style.margin = '0 auto'
        div.style.borderRadius = '5px'
        div.style.color = 'white';
        div.style.textAlign = 'center';
        div.style.marginBottom = '30px';
        div.style.fontSize = '30px'

        h1.prepend(div);

        setTimeout(() => {
            div.remove();
        }, 1500);
        return;
    }

    verAnswer()
})