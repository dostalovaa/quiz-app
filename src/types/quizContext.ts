import { createContext } from "react";
import { initialState } from "../reducer/quizReducer";
import type { QuizState, QuizAction } from "../types/quizTypes";
import type { Question } from "../types/question";

export const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  theme: string;
  toggleTheme: () => void;
  playAgain: () => void;
  nextQuestion: (questions: Question[]) => void;
  checkAnswear: (answer: string, question: Question) => Question | undefined;
}>({
  state: initialState,
  dispatch: () => {},
  theme: "light",
  toggleTheme: () => {},
  playAgain: () => {},
  nextQuestion: () => {},
  checkAnswear: () => undefined,
});
