document.addEventListener("DOMContentLoaded", () => {
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
    options: ["November 14", "November 16", "November 18", "November 20"],
    correctIndex: 2,
    reward:
      "You unlocked a little secret 🥹🥹🥹💖✨\n\nThe very first thing that attracted me to you was your dark humor. The moment I realized we laughed at the same things, I felt that you were different in a way that felt rare and comforting. That first spark still feels special to me."
  },

  favorite: {
    title: "My favorite thing about you",
    question:
      "The first time I got drunk with the girls after you added me on Snap, you saved a snap where I tried to say I'm not drunk anymore. How did I say it?",
    options: [
      "I'm not drunk anymore",
      "am nit frunk anhmkre",
      "am nopt drinl anymkre",
      "am niot frunk anymor"
    ],
    correctIndex: 1,
    reward:
      "A little secret unlocked 🥹💖✨\n\nMy favorite thing about you is how incredibly smart you are. The way your mind works genuinely amazes me and it is something I admire every day."
  },

  special: {
    title: "What makes you special to me",
    question: "Biggest typo ever?",
    options: [
      "strawberries with white chocolate",
      "fuck mery im gonna cry",
      "i am i big nerd",
      "lenin's"
    ],
    correctIndex: 2,
    reward:
      "You found a hidden message 🥹💌✨\n\nWhat makes you special to me is how much I can feel your care in every single word you type. You make me feel seen and understood."
  },

  different: {
    title: "What makes you different from everyone else",
    question: "My birthday?",
    options: [
      "September 17, 2003",
      "September 10, 2003 (Saturday)",
      "September 10, 2004",
      "September 10, 2003 (Wednesday)"
    ],
    correctIndex: 3,
    reward:
      "A small secret revealed 🥹🌸✨\n\nYou pay attention to the smallest details and you remember things most people would never notice. That makes me feel very cared for."
  },

  lucky: {
    title: "Why I feel lucky to have you",
    question: "My dog's name?",
    options: ["Maya Mucea", "Maia Mucea", "Mia Mucea", "Maria Mucea"],
    correctIndex: 0,
    reward:
      "You unlocked something special 🥹🍀✨\n\nI feel lucky to have you because you motivate me to become a better version of myself every single day."
  },

  admire: {
    title: "What I admire about you the most",
    question: "Current chess score?",
    options: ["8/16/5", "5/19/5", "6/15/5", "7/14/5"],
    correctIndex: 1,
    reward:
      "Another secret unlocked 🥹♟️✨\n\nI admire your motivation and commitment. When you want something, you truly work for it and that inspires me."
  },

  see: {
    title: "What I think when I see you",
    question: "A song that reminds me of you?",
    options: ["Scrum", "Cenusa", "Foc", "Dorul"],
    correctIndex: 0,
    reward:
      "A hidden message appeared 🥹🧸✨\n\nWhenever I see you, everything feels softer and calmer. You give me a feeling of warmth and comfort."
  },

  message: {
    title: "A small message",
    question: "What do we think about anime?",
    options: [
      "Fucking disgusting terrible shit",
      "Fire!",
      "We love them!",
      "Fuck yeah!"
    ],
    correctIndex: 0,
    reward:
      "You unlocked the final secret 🥹🥹🥹💖✨\n\nYou already know you are the most important person to me and I feel incredibly lucky that you came into my life. The way it happened was so random and goofy, yet it feels very special to me. The chances were so small and still something beautiful started.\n\nI am very grateful that you are exactly the way you are and I truly wish you all the happiness in the world because you deserve the very best. You have a beautiful heart and a kind soul.\n\nHappy Birthday 💝"
  }
};


  function openQuiz(key) {
    const q = quizzes[key];
    if (!q) return;

    quizTitle.textContent = q.title;
    questionEl.textContent = q.question;

    feedbackEl.textContent = "";
    giftBox.hidden = true;
    giftText.textContent = "";

    answersEl.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answer";
      btn.type = "button";
      btn.textContent = opt;

      btn.addEventListener("click", () => {
        if (idx === q.correctIndex) {
          feedbackEl.textContent = "Correct ✅";
          giftText.textContent = q.reward;
          giftBox.hidden = false;
          [...answersEl.querySelectorAll("button")].forEach(b => (b.disabled = true));
        } else {
          feedbackEl.textContent = "Wrong answer ❌ Try again.";
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
});
