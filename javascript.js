        // Inspirational quotes array
        const quotes = [
            "You are stronger than you think.",
            "This too shall pass.",
            "Believe in yourself and all that you are.",
            "Breathe. It's just a bad day, not a bad life.",
            "You are enough just as you are.",
            "Take things one step at a time."
        ];

        const quoteText = document.getElementById('quote-text');
        const newQuoteButton = document.getElementById('new-quote');

        // Change the quote when the button is clicked
        newQuoteButton.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteText.textContent = quotes[randomIndex];
        });

// Breathing exercise
const circle = document.getElementById('circle');
const breatheInstruction = document.getElementById('breathe-instruction');
const startBreathingButton = document.getElementById('start-breathing');
const stopBreathingButton = document.getElementById('stop-breathing'); // New stop button
let breathingInterval;

startBreathingButton.addEventListener('click', () => {
    // Reset the instruction and circle for fresh start
    breatheInstruction.textContent = "Inhale";
    circle.classList.add('active');
    
    // Start the breathing cycle
    breathingInterval = setInterval(() => {
        setTimeout(() => {
            breatheInstruction.textContent = "Hold";
        }, 4000);
    
        setTimeout(() => {
            breatheInstruction.textContent = "Exhale";
        }, 8000);
    
        setTimeout(() => {
            breatheInstruction.textContent = "Inhale";
        }, 12000);
    }, 12000);  // The entire cycle repeats every 12 seconds
});

// Stop the breathing exercise when the stop button is clicked
stopBreathingButton.addEventListener('click', () => {
    clearInterval(breathingInterval);  // Clear the interval to stop the breathing cycle
    circle.classList.remove('active'); // Remove the active class to stop the circle animation
    breatheInstruction.textContent = "Inhale"; // Reset the instruction
});
        // Timer functionality
        const startTimerButton = document.getElementById('start-timer');
        const exerciseTimerDisplay = document.getElementById('exercise-timer');
        let timer;

        startTimerButton.addEventListener('click', () => {
            let timeLeft = 120; // 2 minutes in seconds
            clearInterval(timer);
            timer = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                exerciseTimerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                timeLeft--;
                if (timeLeft < 0) {
                    clearInterval(timer);
                    exerciseTimerDisplay.textContent = "Time's up!";
                }
            }, 1000);
        });

        // Mood Tracker
        const moodSelect = document.getElementById('mood');
        const trackMoodButton = document.getElementById('track-mood');
        const moodLog = document.getElementById('mood-log');

        trackMoodButton.addEventListener('click', () => {
            const selectedMood = moodSelect.value;
            const currentTime = new Date().toLocaleTimeString();
            moodLog.textContent = `Mood logged: ${selectedMood} at ${currentTime}`;
        });

  // Chatbot Functionality
  const botReplies = {
    'hello': 'Hi there! How can I help you today?',
    'how are you': 'I am just a bot, but thank you for asking!',
    'feeling stressed': 'I am sorry to hear that. Try some deep breathing exercises or play some calming music.',
    'goodbye': 'Goodbye! Take care and remember to be kind to yourself.'
  };

  function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
      chatbox.style.display = "block";
    } else {
      chatbox.style.display = "none";
    }
  }

  function sendMessage() {
    const input = document.getElementById("chatInput").value.toLowerCase();
    const chatLog = document.getElementById("chatLog");

    if (input.trim() !== "") {
      let userMessage = document.createElement('p');
      userMessage.innerHTML = `<b>You:</b> ${input}`;
      chatLog.appendChild(userMessage);

      let botResponse = botReplies[input] || "I'm not sure how to respond to that, but I'm here to listen.";
      let botMessage = document.createElement('p');
      botMessage.innerHTML = `<b>Bot:</b> ${botResponse}`;
      chatLog.appendChild(botMessage);

      document.getElementById("chatInput").value = "";
      chatLog.scrollTop = chatLog.scrollHeight; // Auto scroll to latest message
    }
  }

  // Music Control
  function playMusic() {
    document.getElementById("relaxMusic").play();
  }

  function stopMusic() {
    document.getElementById("relaxMusic").pause();
  }
