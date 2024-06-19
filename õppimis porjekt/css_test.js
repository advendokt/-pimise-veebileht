function checkAnswers() {
    const answers = {
        question1: "color",
        question2: "background-color",
        question3: "font-size",
        question4: "border-radius",
        question5: "box-shadow"
    };

    let score = 0;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = ""; 

    for (const question in answers) {
        const userAnswer = document.getElementById(question).value.trim().toLowerCase();
        const correctAnswer = answers[question];

        const answerElement = document.createElement("div");

        if (userAnswer === correctAnswer) {
            score++;
            answerElement.textContent = `Küsimus ${question.slice(-1)}: Õige! (${correctAnswer})`;
            answerElement.style.color = "green";
        } else {
            answerElement.textContent = `Küsimus ${question.slice(-1)}: Vale! Õige vastus oli: ${correctAnswer}`;
            answerElement.style.color = "red";
        }

        resultElement.appendChild(answerElement);
    }

    const totalQuestions = Object.keys(answers).length;
    resultElement.innerHTML += `<p>Sinu skoor: ${score} / ${totalQuestions}</p>`;

    if (score === totalQuestions) {
        resultElement.style.color = "green";
        resultElement.innerHTML += "<p>Õnnitleme! Kõik vastused olid õiged.</p>";
    } else {
        resultElement.style.color = "red";
        resultElement.innerHTML += "<p>Proovi uuesti, mõned vastused olid valesti.</p>";
    }
}
