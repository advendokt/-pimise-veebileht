function submitTest() {
    const answers = {
        question1: "object",
        question2: "push",
        question3: "55",
        question4: "const",
        question5: "4"
    };

    let score = 0;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    for (const question in answers) {
        const userAnswer = document.getElementById(question).value.trim();
        const correctAnswer = answers[question];

        const answerElement = document.createElement("div");

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
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