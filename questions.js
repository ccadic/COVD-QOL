const questions = [
    "Maux de tete au travail",
    "Les mots se chevauchent a la lecture",
    "Brulures, demangeaisons, larmoiement…",
    "Saut/repetition de ligne a la lecture",
    "Mouvement de tete/ fermeture d'un oeil a la lecture",
    "Difficulte a la copie au tableau",
    "Evitement des activites de pres/ la lecture",
    "Oublie de petits mots a la lecture",
    "Ecriture qui monte ou qui descend",
    "Desalignement des chiffres et/ou des lettres dans des colonnes",
    "Diminution de la comprehension de lecture",
    "Se rapproche pour lire",
    "Difficulte de concentration a la lecture",
    "Difficulte a terminer vos activites a temps",
    "Dire « je ne peux pas » avant d'avoir essayer",
    "Maladresse, faire tomber des choses, se cogner",
    "Mauvaise utilisation du temps",
    "Perdre des affaires, des objets",
    "Oubli, mauvaise memoire"
];

function generateQuestions() {
    let html = `<tr>
                    <th>Question</th>
                    <th>Jamais (=0)</th>
                    <th>Rarement (=1)</th>
                    <th>Parfois (=2)</th>
                    <th>Souvent (=3)</th>
                    <th>Toujours (=4)</th>
                </tr>`;

    questions.forEach((question, index) => {
        html += `<tr>
                    <td>${question}</td>
                    <td><input type="radio" name="question${index + 1}" value="0" onclick="calculateScore()"></td>
                    <td><input type="radio" name="question${index + 1}" value="1" onclick="calculateScore()"></td>
                    <td><input type="radio" name="question${index + 1}" value="2" onclick="calculateScore()"></td>
                    <td><input type="radio" name="question${index + 1}" value="3" onclick="calculateScore()"></td>
                    <td><input type="radio" name="question${index + 1}" value="4" onclick="calculateScore()"></td>
                </tr>`;
    });

    document.getElementById('questionsTable').innerHTML = html;
}

function calculateScore() {
    let score = 0;
    for (let i = 1; i <= questions.length; i++) {
        const radios = document.getElementsByName('question' + i);
        for (let radio of radios) {
            if (radio.checked) {
                score += parseInt(radio.value, 10);
            }
        }
    }

    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Score: ${score}`;

    if (score > 20) {
        scoreDisplay.classList.add('significant');
    } else {
        scoreDisplay.classList.remove('significant');
    }
}

document.addEventListener('DOMContentLoaded', generateQuestions);

