document.addEventListener("DOMContentLoaded", () => {
  const quizCard = document.getElementById("quizCard");
  const quizTitle = document.getElementById("quizTitle");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const feedbackEl = document.getElementById("feedback");
  const giftBox = document.getElementById("gift");
  const giftText = document.getElementById("giftText");
  const closeQuizBtn = document.getElementById("closeQuiz");
    // ---------------------------
  // LOCK SCREEN (entry password)
  // ---------------------------
  const lockOverlay = document.getElementById("lockOverlay");
  const lockInput = document.getElementById("lockInput");
  const lockBtn = document.getElementById("lockBtn");
  const lockFeedback = document.getElementById("lockFeedback");
  const lockHintBox = document.getElementById("lockHintBox");
  const lockHintText = document.getElementById("lockHintText");
  const lockCard = lockOverlay?.querySelector(".lockCard");

  //compliment cards
  const complimentBtn = document.getElementById("complimentBtn");
  const complimentCard = document.getElementById("complimentCard");
  const complimentText = document.getElementById("complimentText");
  const anotherCompliment = document.getElementById("anotherCompliment");
  const closeCompliment = document.getElementById("closeCompliment");

  // VIDEO WITH PIN
  const pinVideoCard = document.getElementById("pinVideoCard");
  const videoCard = document.getElementById("videoCard");

  const closePinVideo = document.getElementById("closePinVideo");
  const pinVideoInput = document.getElementById("pinVideoInput");
  const pinVideoBtn = document.getElementById("pinVideoBtn");
  const pinVideoFeedback = document.getElementById("pinVideoFeedback");

  const closeVideo = document.getElementById("closeVideo");
  const memoryVideo = document.getElementById("memoryVideo");

  const VIDEO_PIN = "67";

  const PASSWORD = "671342";
  const HINT_TEXT = "our fav number, a+b, a×b";
  lockHintText.textContent = HINT_TEXT;


  let tries = 0;

  function showLock() {
    lockOverlay.hidden = false;
    lockOverlay.style.display = "grid";
    lockOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => lockInput.focus(), 0);
  }

  function hideLock() {
    lockOverlay.style.display = "none";
    lockOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function unlock() {
  const val = (lockInput.value || "").trim();

  if (val === PASSWORD) {
    lockFeedback.textContent = "✅ Unlocked.";
    hideLock();
    return;
  }

  lockFeedback.textContent = "❌ Wrong password. Try again.";
  lockInput.select();

  // shake animation
  if (lockCard) {
    lockCard.classList.remove("shake");
    void lockCard.offsetWidth;
    lockCard.classList.add("shake");
  }
}


  // If overlay exists, enforce lock on entry
  if (lockOverlay) {
    showLock();
    lockBtn.addEventListener("click", unlock);
    lockInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") unlock();
    });

    // Optional: prevent closing with Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lockOverlay.style.display !== "none") {
        e.preventDefault();
        lockFeedback.textContent = "Enter the password 🙂 (PIN)";
      }
    });
  }


  const quizzes = {
    attracted: {
      title: "What attracted me to you first",
      question: "When did we meet?",
      options: ["November 14", "November 16", "November 18", "November 20"],
      correctIndex: 2,
      reward:
        "You unlocked a little secret 🥹🥹🥹💖✨\n\nThe very first thing that attracted me to you was your retarded humor that was just as bad as mine. I knew that you were different in a way that felt rare and shocking. That first spark still feels special to me."
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
        "A little secret unlocked 🥹🥹💖✨\n\nMy favorite thing about you is how incredibly smart you are (I'm still smarter tho). I don't wanna boost your ego too much, but the way your mind works genuinely amazes me and it is something I admire every single day."
    },

    special: {
      title: "What makes you special to me",
      question: "Biggest fuck ups OAT?",
      options: [
        "strawberries with white chocolate",
        "fuck mery im gonna cry",
        "i am i big nerd",
        "lenin's"
      ],
      correctIndex: 2,
      reward:
        "You found a hidden message 🥹🥹💌✨\n\nWhat makes you special to me is how much I can feel your care in every single word you type and say. You make me feel seen and understood. You pay attention to every word I say, trying to understand the meaning behind it, why I chose it, and what I’m truly feeling in each moment. I’ve never experienced something like this before, and it’s a feeling that’s almost impossible to put into words. 💫"
    },

    different: {
      title: "What makes you different from everyone else",
      question: "My birthday?",
      options: [
        "September 17, 2003 (Wednesday)",
        "September 10, 2003 (Saturday)",
        "September 10, 2004 (Thursday)",
        "September 10, 2003 (Wednesday)"
      ],
      correctIndex: 3,
      reward:
        "A small secret revealed 🥹🥹🌸✨\n\nYou pay attention to the smallest details and you remember things most people would never notice. That makes me feel very cared for."
    },

    lucky: {
      title: "Why I feel lucky to have you",
      question: "My dog's name?",
      options: ["Maya Mucea", "Maia Mucea", "Mia Mucea", "Maria Mucea"],
      correctIndex: 0,
      reward:
        "You unlocked something special 🥹🥹🍀✨\n\nI feel lucky to have you because you motivate me to become a better version of myself every single day. Finding someone who inspires you to grow and become better every day, not because they ask you to, but because you choose it for yourself just to see them happy, is something incredibly rare. ✨"
    },

    admire: {
      title: "What I admire about you the most",
      question: "Current chess score?",
      options: ["8/16/5", "5/19/5", "6/15/5", "7/14/5"],
      correctIndex: 1,
      reward:
        "Another secret unlocked 🥹🥹♟️✨\n\nI admire your motivation and commitment to anything. When you want something, you truly work for it and that inspires me."
    },

    see: {
      title: "What I think when I see you",
      question: "A song that reminds me of you?",
      options: ["Scrum", "Cenusa", "Foc", "Dorul"],
      correctIndex: 0,
      reward:
        "A hidden message appeared 🥹🥹🧸✨\n\n🧸 - this is how I feel when I see you. Whenever I see you, everything feels softer and calmer. You give me a feeling of warmth, comfort and safety."
    },

    message: {
      title: "A small message hihi",
      question: "What do we think about anime?",
      options: [
        "I know I shouldn't watch them. I'm so sorry I do. I'll stop for you ml",
        "Fire!",
        "We love them!",
        "Fuck yeah!"
      ],
      correctIndex: 0,
      reward:
        "You unlocked the final secret 🥹🥹🥹💖✨\n\nYou already know you are the most important person to me and I feel incredibly lucky that you came into my life. The way it happened was so random and goofy, yet it feels very special to me. The chances were so small and still something sooo beautiful started.\n\nI am very grateful that you are exactly the way you are and I truly wish you all the happiness in the world because you deserve the very best. You have a beautiful heart and a kind soul and you already hold a very special place in my heart.\n\nHappy Birthday 💝\n\nThis quote will always remind me of you.\n\n“Whatever our souls are made of, his and mine are the same.”\n\n       - Emily Brontë"
    }
  };

  function escapeHtml(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function setGiftText(rewardText) {
    // rewardText format: "Unlocked line ...\n\nrest of message..."
    const parts = rewardText.split("\n\n");
    const header = escapeHtml(parts[0] || "");
    const body = escapeHtml(parts.slice(1).join("\n\n"));

    giftText.innerHTML =
      `<div class="unlockTitle">${header}</div>` +
      `<div class="unlockBody">${body.replaceAll("\n\n", "<br><br>")}</div>`;
  }

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
          setGiftText(q.reward);
          giftBox.hidden = false;

          // disable answers after correct
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

  // compliments list
const compliments = [
  "You make my days brighter  ☀️",
  "You are my favorite notification 💬",
  "You make everything feel softer 🌸",
  "I feel lucky you exist 🍀",
  "You have the kindest heart I know 💖",
  "You make me smile more than anyone else 😊",
  "You are my safe place 🤍",
  "You make any moments feel special ✨",
  "You are my safe place 🏡",
  "You inspire me to be a better person 🌱",
  "You make the world feel less scary 🌍",
  "You are my favorite part of every day 💫",
  "I love how your mind works 🧠💘",
  "You make everything more fun 🎈",
  "You make me feel understood 🫶",
  "You make my heart feel full 💓",
  "I’m really grateful you are in my life 💝",

  "You’re dangerously easy to get attached to 😌",
  "You’re my favorite distraction 😏",
  "You’re soo addictive 💘",
  "You make it very hard for me to focus on anything else 🙄💖",
  "You owe me more attention 😌",
  "You’re the reason my phone battery dies so fast 📱",
  "You’re perfect for me 🤨💘"
];

let lastComplimentIndex = -1;

function pickCompliment() {
  let idx = Math.floor(Math.random() * compliments.length);

  if (compliments.length > 1 && idx === lastComplimentIndex) {
    idx = (idx + 1) % compliments.length;
  }

  lastComplimentIndex = idx;
  return compliments[idx];
}

function openCompliment() {
  quizCard.hidden = true;
  complimentText.textContent = pickCompliment();
  complimentCard.hidden = false;
  complimentCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeComplimentCard() {
  complimentCard.hidden = true;
}

complimentBtn.addEventListener("click", openCompliment);
anotherCompliment.addEventListener("click", () => {
  complimentText.textContent = pickCompliment();
});
closeCompliment.addEventListener("click", closeComplimentCard);

function openPinVideo() {
  quizCard.hidden = true;
  complimentCard.hidden = true;

  pinVideoInput.value = "";
  pinVideoFeedback.textContent = "";
  pinVideoCard.hidden = false;
  pinVideoCard.scrollIntoView({ behavior: "smooth" });
}

function openVideo() {
  pinVideoCard.hidden = true;
  videoCard.hidden = false;
  videoCard.scrollIntoView({ behavior: "smooth" });
}

function closeVideoCard() {
  videoCard.hidden = true;
  memoryVideo.pause();
  memoryVideo.currentTime = 0;
}

pinVideoBtn.addEventListener("click", () => {
  if (pinVideoInput.value === VIDEO_PIN) openVideo();
  else pinVideoFeedback.textContent = "Wrong PIN ❌";
});

closePinVideo.addEventListener("click", () => pinVideoCard.hidden = true);
closeVideo.addEventListener("click", closeVideoCard);

document.querySelector('[data-open="pinVideo"]')
  .addEventListener("click", openPinVideo);

});
