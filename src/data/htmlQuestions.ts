import type { Question } from "../types/question";

export const htmlQuestions: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
      "Hyperlink and Text Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    id: 2,
    question: "Which HTML element is used to define the title of a document?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    correctAnswer: "<title>",
  },
  {
    id: 3,
    question: "What is the purpose of the <a> tag in HTML?",
    options: [
      "To create a line break",
      "To create a hyperlink",
      "To add an image",
      "To define an article",
    ],
    correctAnswer: "To create a hyperlink",
  },
  {
    id: 4,
    question: "Which of the following is a correct HTML5 doctype declaration?",
    options: [
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<DOCTYPE html>",
      "<!DOCTYPE>",
    ],
    correctAnswer: "<!DOCTYPE html>",
  },
  {
    id: 5,
    question: "Which HTML tag is used to insert an image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    id: 6,
    question: "Which attribute is used in HTML to define inline styles?",
    options: ["class", "style", "font", "id"],
    correctAnswer: "style",
  },
  {
    id: 7,
    question: "What is the correct way to comment in HTML?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    correctAnswer: "<!-- This is a comment -->",
  },
];
