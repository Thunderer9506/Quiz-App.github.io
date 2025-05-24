# Quiz App

<!-- Project Banner -->
![Home Page](Images/Home%20Page.png)

## Overview

The Quiz App is a web-based quiz platform built with vanilla JavaScript, HTML, and CSS. It allows users to select a subject (HTML, CSS, JavaScript, or Accessibility), answer multiple-choice questions, and receive instant feedback and scoring. The app features a modern, responsive UI and supports light/dark mode toggling.

## Features

- Select from four subjects: HTML, CSS, JavaScript, Accessibility
- 10 multiple-choice questions per subject
- Instant feedback on answer selection
- Score tracking and summary at the end of each quiz
- Responsive design for desktop and mobile
- Light/Dark mode toggle

## Technologies Used

- **Frontend:** HTML5, CSS3 (with Bootstrap 5 for some styling), Vanilla JavaScript (ES6)
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Rubik)
- **No frameworks or backend required**
- **Data:** All quiz questions are stored in a local JavaScript file (`quiz_questions.js`)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.)
- No installation or server required

### Installation & Usage

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd "Full Stack Development Project/Quiz App"
   ```

2. Open `index.html` in your browser.

That's it! No build steps or dependencies are required.

## Usage

- On the home screen, pick a subject to start the quiz.
- For each question, select your answer and click "Submit".
- Your score is updated instantly. At the end, view your total score and try again if you wish.

## Showcase

<!-- App UI Showcase -->
![Dark Mode](Images/Dark%20Mode.png)
![Question Page](Images/Question%20Page.png)
![Score Page](Images/Score%20Page.png)


## Folder Structure

```
Quiz App/
├── Design/
│   ├── moon-solid.svg
│   └── sun-solid.svg
├── app.js
├── index.html
├── quiz_questions.js
├── style.css
├── README.md
└── ...
```

- `app.js`: Main application logic (UI, quiz flow, scoring)
- `quiz_questions.js`: All quiz data (questions, options, answers)
- `index.html`: Main HTML file
- `style.css`: All styles (including responsive and dark mode)

## Contact

For questions or feedback, please open an issue or contact the maintainer.