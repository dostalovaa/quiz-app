import type { Question } from "../types/question";

export const cssQuestions: Question[] = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 2,
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<script>", "<link>", "<style>", "<css>"],
    correctAnswer: "<link>",
  },
  {
    id: 3,
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "font-style"],
    correctAnswer: "color",
  },
  {
    id: 4,
    question: "How do you select an element with the id 'header' in CSS?",
    options: ["#header", ".header", "header", "*header"],
    correctAnswer: "#header",
  },
  {
    id: 5,
    question: "Which property is used to change the background color?",
    options: ["color", "background-color", "bgcolor", "background"],
    correctAnswer: "background-color",
  },
  {
    id: 6,
    question:
      "Which CSS value makes an element invisible but still takes up space?",
    options: [
      "display: none",
      "visibility: hidden",
      "opacity: 0",
      "hidden: true",
    ],
    correctAnswer: "visibility: hidden",
  },
  {
    id: 7,
    question: "How do you make a flex container in CSS?",
    options: [
      "display: block",
      "display: grid",
      "display: inline",
      "display: flex",
    ],
    correctAnswer: "display: flex",
  },
];
