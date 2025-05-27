import type { Question } from "../types/question";

export const jsQuestions: Question[] = [
  {
    id: 1,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const",
  },
  {
    id: 2,
    question: "What is the result of `typeof null` in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correctAnswer: "'object'",
  },
  {
    id: 3,
    question:
      "Which method is used to parse a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "parse.JSON()",
      "stringify.JSON()",
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    id: 4,
    question: "What does `NaN` stand for in JavaScript?",
    options: [
      "Not a Number",
      "No any Name",
      "Negative and Null",
      "New assigned Number",
    ],
    correctAnswer: "Not a Number",
  },
  {
    id: 5,
    question: "What will `2 + '2'` return in JavaScript?",
    options: ["4", "22", "'4'", "NaN"],
    correctAnswer: "22",
  },
  {
    id: 6,
    question: "Which symbol is used for strict equality comparison?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "===",
  },
  {
    id: 7,
    question: "What is the output of `Boolean('false')`?",
    options: ["false", "true", "undefined", "NaN"],
    correctAnswer: "true",
  },
];
