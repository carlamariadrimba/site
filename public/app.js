const quizCard = document.getElementById("quizCard");
const quizTitle = document.getElementById("quizTitle");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const giftBox = document.getElementById("gift");
const giftText = document.getElementById("giftText");
const closeQuizBtn = document.getElementById("closeQuiz");

const quizzes = {
  attracted: {
    title: "What attracted me to you first",
    question: "When did we meet?",
    options: ["14 nov", "16 nov", "18 nov", "20 nov"],
    correctIndex: 2,
    reward: "The fact that you had the same dark humor as me."
  },

  favorite: {
    title: "My favorite thing about you",
    question:
      "The first time I got drunk with the girls after you added me on snap, you saved a snap where I tried to say I'm not drunk anymore. How did I say it?",
    options: [
      "im nut drunk animor",
      "am nit frunk anhmkre",
      "am nopt drinl anymkre",
      "am niot frunk anymor"
    ],
    correctIndex: 1,
    reward: "How smart you are."
  },

  special: {
    title: "What makes you special to me",
    question: "Biggest fuck up OAT?",
    options: [
      "strawberries w white chocolate",
      "fuck mery im gonna cry",
      "i am i big nerd",
      "lenin's"
    ],
    correctIndex: 2,
    reward: "I can feel how much you care with every word u type."
  },

  different: {
    title: "What makes you different from everyone else",
    question: "My birthday?",
    options: [
      "17 sept 2003 (wednesday)",
      "10 sept 2003 (saturday)",
      "10 sept 004 (saturday)",
      "10 sept 2003 (wednesday)"
    ],
    correctIndex: 3,
    reward: "How you pay attention to every small detail."
  },

  lucky: {
    title: "Why I feel lucky to have you",
    question: "My dog's name?",
    options: ["maya mucea", "maia mucea", "mia mucea", "maria mucea"],
    correctIndex: 0,
    reward: "Coz u motivate me to become a better version of myself everyday."
  },

  admire: {
    title: "What I admire about you the most",
    question: "Current chess score? (go check)",
    options: ["8/16/5", "5/19/5", "6/15/5", "7/14/5"],
    correctIndex: 1,
    reward: "Your motivation and commitment."
  },

  see: {
    title: "What I think when I see you",
    question: "A song that reminds me of you?",
    options: ["scrum", "cenusa", "foc", "dorul"],
    correctIndex: 0,
    reward: "🧸"
  },

  message: {
    title: "A small message",
    question: "What do we think about anime?",
    options: [
      "fucking disgusting terrible shit",
      "fire!",
      "we love them!",
      "fuck yeah!"
    ],
    correctIndex: 0,
    reward:
      "stii deja ca esti cel mai important pentru mine si ma simt cea mai norocoasa ca mi ai aparut in viata, desi mmodul in care ai facut e ff goofy si probabil nu l inteleg multi, mi se pare ff special ca sansele erau atat de mici, dar totusi s a ignit ceva atat de frumos. sunt ff recunoscatoare ca esti asa cum esti si iti doresc sincer tot binele din lume ptc meriti tot ce i mai bun. ai o inima atat de frumoasa si un suflet atat de curat si iti doresc un cald la multi ani!"
  }
};

function openQuiz(key) {
  const q = quizzes[key];
  if (!q) return;

  quizTitle.textContent = q.title;
  questionEl.textContent = q.question;

  // reset UI
  feedbackEl.textContent = "";
  giftBox.hidden = true;
  giftText.textContent = "";

  // build answers
  answersEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.type = "button";
    btn.textContent = opt;

    btn.addEventListener("click", () => {
      const correct = idx === q.correctIndex;

      if (correct) {
        feedbackEl.textContent = "Correct ✅";
        giftText.textContent = q.reward;
        giftBox.hidden = false;

        // disable answers after correct
        [...answersEl.querySelectorAll("button")].forEach(b => (b.disabled = true));
      } else {
        feedbackEl.textContent = "Wrong answer ❌ Try again.";
        // tiny shake effect
        quizCard.classList.remove("shake");
        void quizCard.offsetWidth; // reflow
        quizCard.classList.add("shake");
      }
    });

    answersEl.appendChild(btn);
  });

  quizCard.hidden = false;
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeQuiz() {
  quizCard.hidden = true;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  giftBox.hidden = true;
  giftText.textContent = "";
}

document.querySelectorAll(".topic").forEach(btn => {
  btn.addEventListener("click", () => openQuiz(btn.dataset.key));
});

closeQuizBtn.addEventListener("click", closeQuiz);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeQuiz();
});
