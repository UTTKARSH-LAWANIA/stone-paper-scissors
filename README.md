🎮 Rock Paper Scissors Game

A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript.
The user plays against the computer, and scores are tracked dynamically.

🚀 Features

Interactive UI with clickable images

Random computer move generation

Live score tracking

Dynamic result message display

Visual feedback with color changes (Win → Green, Lose → Red, Draw → Default)

Clean and responsive layout using Flexbox

🛠️ Tech Stack

HTML5 – Structure of the game

CSS3 – Styling and layout (Flexbox)

JavaScript (Vanilla JS) – Game logic and DOM manipulation

📂 Project Structure
rock-paper-scissors/
│
├── index.html      # Main HTML file
├── style.css       # Styling file
├── script.js       # Game logic
├── rock.jpg
├── paper.jpg
└── scissors.jpg
🧠 How the Game Works

User clicks on Rock, Paper, or Scissors.

Computer randomly generates a choice.

The game compares both choices:

Rock beats Scissors

Paper beats Rock

Scissors beats Paper

Scoreboard updates automatically.

A message displays the result.

🔍 Core Logic Overview
🎲 Random Computer Choice

The computer randomly selects from:

["rock", "paper", "scissors"]
🏆 Winner Logic

If choices are same → Draw

Otherwise, conditional checks determine winner

Scores update dynamically

Message background color changes based on result

💻 How to Run the Project

Download or clone the repository:

git clone https://github.com/your-username/rock-paper-scissors.git

Open index.html in your browser.

That’s it 🎉

📸 Game Preview

(Displays clickable circular images with score below and result message.)

⚠️ Known Issues / Improvements

querySelectorAll("choices") should be .choices (missing dot in JS)

Minor HTML <p> closing tag issue

Could improve UI responsiveness for mobile

Add sound effects for better UX

Add reset button

Add animations

🔮 Future Improvements

Add difficulty modes

Add local storage to save scores

Add multiplayer mode

Convert to React version

Add game statistics

👨‍💻 Author

Uttkarsh Lawania
B.Tech Student | Learning Full Stack Development
