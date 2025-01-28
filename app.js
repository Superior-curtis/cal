function generateQuiz() {
    const minRange = parseInt(document.getElementById('min-range').value);
    const maxRange = parseInt(document.getElementById('max-range').value);
    const problemType = document.getElementById('problem-type').value;
    const numQuestions = parseInt(document.getElementById('num-questions').value);

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    let questions = [];

    while (questions.length < numQuestions) {
        let num1 = getRandomNumber(minRange, maxRange);
        let num2 = getRandomNumber(minRange, maxRange);

        let question;
        if (problemType === 'add') {
            question = `${num1} + ${num2} = ?`;
        } else if (problemType === 'subtract') {
            question = `${num1} - ${num2} = ?`;
        } else if (problemType === 'mixed') {
            const operator = Math.random() < 0.5 ? '+' : '-';
            question = operator === '+' 
                ? `${num1} + ${num2} = ?` 
                : `${num1} - ${num2} = ?`;
        }

        if (!questions.includes(question)) {
            questions.push(question);
        }
    }

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-item');
        questionDiv.textContent = `${index + 1}. ${question}`;
        quizContainer.appendChild(questionDiv);
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
