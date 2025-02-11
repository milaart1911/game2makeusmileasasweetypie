const questions = [
    {
        category: "Кино",
        question: "Стэнли Кубрик снял свой легендарный фильм «2001: Космическая одиссея» (1968) без чёткого сценария, полагаясь на...",
        answers: ["деньги инвесторов", "интуицию", "запрос зрителя", "политический контекст"],
        correct: 1
    },
    {
        category: "Живопись",
        question: "Сальвадор Дали написал картину «Постоянство памяти» будучи усталым, бедным и замученным бытом. Вдохновение на шедевр принес...",
        answers: ["кусок плавленного камамбера", "воск свечи", "свитер на спинке стула", "увядающие цветы"],
        correct: 0
    },
    {
        category: "Музыка",
        question: "Альбом «Dark Side of the Moon» (1973) Pink Floyd стоил музыкантам буквально нервного срыва от изнурительной работы. Сколько недель он продержался в топе чартов?",
        answers: ["563", "724", "100", "276"],
        correct: 1
    },
    {
        category: "Игры",
        question: "Студия вложила в разработку этой игры все деньги (и даже те, которых у нее по факту не было). Какая игра была самой амбициозной ставкой, успех которой был вопросом выживания?",
        answers: ["The Witcher 3: Wild Hunt", "Cyberpunk 2077", "Star Wars: The Old Republic", "No Man’s Sky"],
        correct: 0
    },
    {
        category: "Литература",
        question: "Этот роман был написан в условиях полной неопределённости: автор находился в бедственном положении, будущее было туманным, а публикация казалась маловероятной.",
        answers: ["«Гарри Поттер и философский камень»", "«Война и мир»", "«1984»", "«Унесённые ветром»"],
        correct: 0
    }
];

let hugs = 0;

function createGame() {
    const container = document.getElementById("game");

    questions.forEach((q, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = `${q.category}: ${q.question}`;
        card.appendChild(title);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        q.answers.forEach((answer, i) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index, i, button);
            buttonContainer.appendChild(button);
        });

        card.appendChild(buttonContainer);
        container.appendChild(card);
    });
}

function checkAnswer(questionIndex, answerIndex, button) {
    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (answerIndex === questions[questionIndex].correct) {
        hugs += 10;
        button.classList.add("correct"); // Зеленый цвет для правильного ответа
    } else {
        button.classList.add("wrong"); // Красный цвет для неправильного ответа
    }

    document.getElementById("hugs").textContent = hugs;
}

createGame();
