// クイズの問題と回答
const questions = [{
        question: "私の名前は何でしょう？",
        choices: ["秀英", "修造", "秀作", "映秀"],
        correctAnswer: 0
    },
    {
        question: "私の出身地はどこでしょう？",
        choices: ["東京", "大阪", "京都", "福岡"],
        correctAnswer: 0
    },
    {
        question: "私の誕生日はいつでしょう？",
        choices: ["9/5", "3/4", "8/11", "7/25"],
        correctAnswer: 2
    },
    {
        question: "私の好きなキャラクターはなんでしょう？",
        choices: ["カビゴン", "シナモン", "キリト", "クロミ"],
        correctAnswer: 0
    },
    {
        question: "私の好きなギターはなんでしょう？",
        choices: ["ストラト", "テレキャス", "レスポール", "PRS"],
        correctAnswer: 0
    },
    // 他の問題を追加
];

let index = 0; // 現在の問題のインデックス
let score = 0; // 正答数

function startQuiz() {
    // スタートボタンがクリックされたときの処理
    const startButton = document.querySelector("button");
    startButton.style.display = "none"; // ボタンを非表示にする

    showQuestion();
}

function showQuestion() {
    // 問題を表示する処理
    const container = document.createElement("div");
    container.classList.add("container", "text-center");

    const question = document.createElement("h2");
    question.textContent = questions[index].question;
    container.appendChild(question);

    const choices = document.createElement("div");
    choices.classList.add("mt-3");

    questions[index].choices.forEach((choice, idx) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("btn", "btn-primary", "mx-1");
        choiceButton.onclick = () => checkAnswer(idx);
        choices.appendChild(choiceButton);
    });

    container.appendChild(choices);
    document.body.innerHTML = "";
    document.body.appendChild(container);
}

function checkAnswer(answer) {
    // 回答が正しいかチェックする処理
    if (answer === questions[index].correctAnswer) {
        score++;
    }

    index++;

    // 問題がまだ残っている場合、次の問題を表示する
    if (index < questions.length) {
        showQuestion();
    } else {
        // クイズが終了した場合、最終ページで正答数を表示する
        showResults();
    }
}

function showResults() {
    // 最終ページで正答数を表示する処理
    const container = document.createElement("div");
    container.classList.add("container", "text-center");

    const result = document.createElement("h2");
    result.textContent = "正答数: " + score + "/" + questions.length;
    container.appendChild(result);

    const tweetButton = document.createElement("a");
    tweetButton.classList.add("btn", "btn-primary", "mt-3");
    tweetButton.textContent = "結果をツイートする";
    tweetButton.href = createTweetLink();
    tweetButton.target = "_blank";
    container.appendChild(tweetButton);

    document.body.innerHTML = "";
    document.body.appendChild(container);
}

function createTweetLink() {
    const text = "私のしゅうえいクイズの正答数は" + score + "/" + questions.length + "でした！";
    const url = "https://s1f10210273.github.io/shuei_test/";

    const tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "%0a&url=" + url;
    return tweetUrl;
}