const question = document.getElementById('pregunta')
const firstOption = document.getElementById('primera-opcion')
const secondOption = document.getElementById('segunda-opcion')
const thirdOption = document.getElementById('tercera-opcion')
const fourthOption = document.getElementById('cuarta-opcion')
const next = document.getElementById('boton-siguiente')
const pp = document.querySelector('.titulos p')

async function getData() {
    const categoria = 'futbol'
    const url = `http://localhost:3000/questions/${categoria}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)

        question.innerHTML = data.questions[3].pregunta
        firstOption.innerHTML += data.questions[3].respuesta_incorrecta2
        secondOption.innerHTML += data.questions[3].respuesta_incorrecta1
        thirdOption.innerHTML += data.questions[3].respuesta_correcta
        fourthOption.innerHTML += data.questions[3].respuesta_incorrecta3
    }
    catch (error) {
        console.log(error)
    }
}

getData()

let correctAnswers = parseInt(localStorage.getItem("puntos"));
let answered = false

firstOption.addEventListener('click', () => {
    resetButtonColors();
    firstOption.style.backgroundColor = "rgb(55, 188, 48)";
    next.style.background = "linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))";
    if (correctAnswers === 0) {
        correctAnswers = 0;
    } else if (correctAnswers === 1) {
        correctAnswers = 1;
    } else if (correctAnswers === 2) {
        correctAnswers = 2
    } else if (correctAnswers === 3) {
        correctAnswers = 3
    } else if (correctAnswers === 4) {
        correctAnswers = 4
    }
    localStorage.setItem("puntos", correctAnswers);
    answered = true
});

secondOption.addEventListener('click', () => {
    resetButtonColors();
    secondOption.style.backgroundColor = "rgb(55, 188, 48)";
    next.style.background = "linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))";
    if (correctAnswers === 0) {
        correctAnswers = 0;
    } else if (correctAnswers === 1) {
        correctAnswers = 1;
    } else if (correctAnswers === 2) {
        correctAnswers = 2
    } else if (correctAnswers === 3) {
        correctAnswers = 3
    } else if (correctAnswers === 4) {
        correctAnswers = 4
    }
    localStorage.setItem("puntos", correctAnswers);
    answered = true
});

thirdOption.addEventListener('click', () => {
    resetButtonColors();
    thirdOption.style.backgroundColor = "rgb(55, 188, 48)";
    next.style.background = "linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))";
    if (correctAnswers === 0) {
        correctAnswers = 1;
    } else if (correctAnswers === 1) {
        correctAnswers = 2;
    } else if (correctAnswers === 2) {
        correctAnswers = 3
    } else if (correctAnswers === 3) {
        correctAnswers = 4
    }
    localStorage.setItem("puntos", correctAnswers);
    answered = true
});

fourthOption.addEventListener('click', () => {
    resetButtonColors();
    fourthOption.style.backgroundColor = "rgb(55, 188, 48)";
    next.style.background = "linear-gradient(to right, rgb(55, 188, 48), rgb(100, 210, 80), rgb(55, 188, 48))";
    if (correctAnswers === 0) {
        correctAnswers = 0;
    } else if (correctAnswers === 1) {
        correctAnswers = 1;
    } else if (correctAnswers === 2) {
        correctAnswers = 2
    } else if (correctAnswers === 3) {
        correctAnswers = 3
    } else if (correctAnswers === 4) {
        correctAnswers = 4
    }
    localStorage.setItem("puntos", correctAnswers);
    answered = true
});

function resetButtonColors() {
    firstOption.style.backgroundColor = "";
    secondOption.style.backgroundColor = "";
    thirdOption.style.backgroundColor = "";
    fourthOption.style.backgroundColor = "";
}

next.addEventListener('click', () => {
    verAnswer()

    if (!answered) {
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = 'Elige una opción, por favor'
        div.appendChild(p)

        div.style.backgroundColor = 'red'
        div.style.maxWidth = '800px'
        div.style.margin = '0 auto'
        div.style.borderRadius = '5px'
        p.style.color = 'white'
        div.style.textAlign = 'center'
        div.style.marginBottom = '30px'
        div.style.fontSize = '30px'

        pp.prepend(div);

        setTimeout(() => {
            div.remove();
        }, 1500);
        return;
    }

    setTimeout(() => {

        window.location.href = "fiveth.html";
    }, 1500)
});

function verAnswer() {
    const correctOption = thirdOption;

    if (firstOption.style.backgroundColor === "rgb(55, 188, 48)") {
        firstOption.style.background = 'red';
        correctOption.style.background = 'rgb(55, 188, 48)';
    } else if (secondOption.style.backgroundColor === "rgb(55, 188, 48)") {
        secondOption.style.background = 'red';
        correctOption.style.background = 'rgb(55, 188, 48)';
    } else if (fourthOption.style.backgroundColor === "rgb(55, 188, 48)") {
        fourthOption.style.background = 'red';
        correctOption.style.background = 'rgb(55, 188, 48)';
    }
}
